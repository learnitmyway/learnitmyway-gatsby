console.log(process.env.CONTEXT)
console.log(process.env.BRANCH)
module.exports = {
  siteMetadata: {
    title: 'Learn it my way',
    author: 'Developer Davo',
    description: 'Developer Davo\'s learning experiences as a self-taught software developer',
    siteUrl: `${process.env.DEPLOY_PRIME_URL || '/'}`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
