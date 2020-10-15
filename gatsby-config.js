/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Developer Portfolio | React, Typescript, and Gatsby.`,
    description: ``,
    author: `@marcjmiller`,
    url: `https://hire.mrmarcmiller.com`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e0qx6nk6zh4o`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
  ],
}
