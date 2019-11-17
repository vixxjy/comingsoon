module.exports = {
  siteMetadata: {
    title: `Smilez Comingsoon site`,
    description: `Smilez gatsby site converting bootstrap template to gatsby`,
    author: `smilez dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro\:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i`,
          `Merriweather\:300,300i,400,400i,700,700i,900,900i`
        ]
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: ``
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
