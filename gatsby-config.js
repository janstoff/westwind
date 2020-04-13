module.exports = {
  // pathPrefix: '/paddelbude', might be needed for production deployment
  plugins: [
    // Setting up efficient Image Handling
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/styling/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // Setting up Markdown pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
      }
    },
    `gatsby-transformer-remark`,
    // Instagram public scraping of Paddelbude Account
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `paddelbude`
      }
    },
    // SASS support
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styling/global.scss', 'src/styling/colors.scss']
      }
    },
    // Typescript support
    'gatsby-plugin-typescript',
    // SEO support
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'paddelbude',
        short_name: 'pb',
        start_url: '/',
        background_color: '#353434',
        theme_color: '#353434',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline'
  ]
};
