module.exports = {
  siteMetadata: {
    siteUrl: 'https://bugsncoffees.com',
    title: '🐛🐛🐛 & ☕☕☕',
    description:
      'A tale of a humble engineer trapped in a world full of bugs, challenges and puzzles...',
    author: {
      name: 'Wendell Adriel',
      title: 'Software Engineer',
      shortBio:
        'Speaker, Writer, PHP/JS/Go/Open Source lover, Dungeon Master, Gamer',
      twitterUser: '@wendell_adriel',
      social: {
        website: 'https://wendelladriel.com',
        github: 'https://github.com/WendellAdriel',
        linkedin: 'https://linkedin.com/in/wendelladrielti/en',
        twitter: 'https://twitter.com/wendell_adriel',
        medium: 'https://medium.com/@wendell_adriel',
        facebook: 'https://facebook.com/wendell.adriel.7',
        email: 'mailto:wendelladriel.ti@gmail.com',
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BugsnCoffees`,
        short_name: `BnC`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#401b14`,
        display: `minimal-ui`,
        icon: `src/images/bc-icon.png`,
      },
    },
    {
      resolve: 'gatsby-remark-emojis',
      options: {
        class: 'emoji-icon',
        size: 64,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`ubuntu\:100,300,400,700`, `charm\:400,700`],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
  ],
}
