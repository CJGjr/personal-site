module.exports = {
    siteMetadata: {
        title: `Casey Gatsby Site First one :)`,
        author: `Casey Gerena (CJ)`,
        description: `Hey this is my first site, sort of.`
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
    ]
}