module.exports = {
  siteMetadata: {
    title: `Albven.com`,
    description: `The team of professionals at Albatross Ventures provide a wide range of consulting services for all your digital needs.  `,
    author: `@mariolafuente`,
    siteUrl: "https://www.Albven.com/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source Lato pro\:300,400, 900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Albven.com`,
        short_name: `Albven`,
        start_url: `/`,
        lang: `en`,
        background_color: `#f1162b`,
        theme_color: `#f1162b`,
        display: `fullscreen`,
        // gcm_sender_id: 'fbe5a671-adba-4b70-b95e-34c8d10c33cf',
        icon: `./static/favicon.ico`, // This path is relative to the root of the site.
        crossOrigin: `anonymous`,// `use-credentials` or `anonymous`
      },
    },
  ],
  
}
