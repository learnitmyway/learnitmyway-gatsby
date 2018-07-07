const siteUrl =
  (process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL) || 'https://www.learnitmyway.com/'
module.exports = {
  siteMetadata: {
    title: 'Learn it my way',
    author: 'Developer Davo',
    description: 'Developer Davo\'s learning experiences as a self-taught software developer',
    quote: '"The more that you read, the more things you will know. \nThe more that you learn, the more places you\'ll go." - Dr. Seuss',
    siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`
    },
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
        trackingId: 'UA-110144291-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: []
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
