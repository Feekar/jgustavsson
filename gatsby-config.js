module.exports = {
  siteMetadata: {
    title: "Web Like Spider",
    author: {
      name: "Jonas Gustavsson",
      summary: "I blog about web development.",
    },
    description:
      "Articles about all things web development. Javascript, CSS, HTML, React.js and more.",
    siteUrl: "https://github.com/Feekar/like-a-spider",
    social: {
      twitter: "https://twitter.com/weblikespider",
      linkedIn: "https://www.linkedin.com/in/jonas-gustavsson-2a72a2108/",
      github: "https://github.com/Feekar/",
      email: "mailto:jonasgson@outlook.com",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Montserrat",
            variants: ["400", "500"],
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // TRACING ID HERE,
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Web Like Spider",
        short_name: "LaS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
