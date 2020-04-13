/** @jsx jsx */
import { jsx, Box, Heading, Text, Flex } from 'theme-ui'
import Layout from './layout'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SourceLink, Status } from './components-system';

function DocPageTemplate({ 
  data, 
  title,
  description,
  ...props 
}) {

  console.log(data)
  const children = <MDXRenderer children={data.mdxDocPage.body} />;
  return (
    <Layout title={title} excerpt={description} {...props}>
      <Box mb={8} mt={8} mb={'85px'}>
        <Flex sx={{justifyContent: 'space-between', alignItems: 'center', mb: 8}}>
          <Heading variant="title">
            {data.mdxDocPage.title}
          </Heading>
          {data.mdxDocPage.status ? <Status mr={2} variant={data.mdxDocPage.status} /> : null} 
        </Flex>
        <Text variant="teaser" color="gray800" size={1} my={2}>
          {data.mdxDocPage.description}
        </Text>
        <Flex sx={{textAlign: 'center'}}>
          {data.mdxDocPage.source ? <SourceLink mr={2} href={data.mdxDocPage.source} /> : null} 
        </Flex>
      </Box>
      {children}
    </Layout>
  );
}

export default DocPageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdxDocPage( slug: { eq: $slug } ) {
      slug
      title
      source
      status
      description
      body
    }
  }
`;
