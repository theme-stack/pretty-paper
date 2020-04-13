module.exports = {
  siteMetadata: {
    title: `Title Placeholder`,
    version: `0.0.0`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-theme-ui-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        remarkPlugins: [require('remark-slug'), require('remark-autolink-headings')],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `src/docs`,
      },
    },
  ],
};
