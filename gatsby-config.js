module.exports = {
  siteMetadata: {
    title: `Dan 4 Ruby`,
    description: `Our wedding site.`,
    author: `Dan Addison`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "the day",
        link: "/the-day",
      },
      {
        name: "RSVP",
        link: "/rsvp",
      },
      {
        name: "gifting",
        link: "/gifting",
      },
      {
        name: "gallery",
        link: "/gallery",
      },
    ],
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
        icon: `src/images/DanRubyFavicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Questrial"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
