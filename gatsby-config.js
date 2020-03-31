
module.exports = {
  
  // pathPrefix: '/blog/',
  

  siteMetadata: {
    // edit below
    title: `sageMachina`,
    author: `Jordan Lesich`,
    description: `Sage Words for all things web development, tech, self-mastery, and philosophy`,
    siteUrl: `https://sagemachina.com/`,
    social: {
      twitter: `jordanlesich`,
    },
  },


  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
      {
          resolve: 'gatsby-plugin-mailchimp',
          options: {
              endpoint: "https://dev.us19.list-manage.com/subscribe/post?u=b2cac6483630d316bc047f09c&amp;id=175728803a",
          },
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sageMachina Blog`,
        short_name: `sageMachina`,
        start_url: `/blog/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    
  ],
}
