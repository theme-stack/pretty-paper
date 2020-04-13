/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")
const { createFilePath } = require(`gatsby-source-filesystem`);
const { createContentDigest } = require(`gatsby-core-utils`)


// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter, actions }) => {
  const contentPath = "src/docs"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}


const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  
  createTypes(`
    interface DocPage @nodeInterface {
      id: ID!
      body: String!
      excerpt: String!
      slug: String!
      title: String!
      description: String
      status: String
      source: String
    }`
  )

  createTypes(
    schema.buildObjectType({
      name: `MdxDocPage`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        description: {
          type: `String`,
        },
        status: {
          type: `String`,
        },
        source: {
          type: `String`,
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `DocPage`],
    })
  )
}

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async ({ node, actions, getNode, createNodeId } ) => {
  const { createNode, createParentChildLink } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode });
    
    const fieldData = {
      title: node.frontmatter.title || '',
      description: node.frontmatter.description || null,
      status: node.frontmatter.status || null,
      source: node.frontmatter.source || null,
      slug,
    }

    const mdxDocPageId = createNodeId(`${node.id} >>> MdxDocPage`)

    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxDocPageId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxDocPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the DocPage interface`,
      },
    })

    createParentChildLink({ 
      parent: node, 
      child: getNode(mdxDocPageId) 
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = require.resolve('./src/page.js');

  const allDocs = await graphql(
    `
      {
        allMdxDocPage(limit: 1000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );

  if (allDocs.errors) {
    console.error(`Error in allDocs: ${allDocs.errors}`);
    throw Error(`Error in allDocs: ${allDocs.errors}`);
  }

  // Dynamically create a page for each markdown file with layout: post
  allDocs.data.allMdxDocPage.edges.forEach(post => {
    const { slug } = post.node;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });
};