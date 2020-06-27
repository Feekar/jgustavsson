module.exports = {
  siteMetadata: {
    title: "Web Like Spider",
    author: {
      name: "Jonas Gustavsson",
      summary: "I blog about web development.",
    },
    description:
      "Articles about all things web development. Javascript, CSS, HTML, React.js and more.",
    siteUrl: "https://github.com/feekar/like-a-spider",
    social: {
      twitter: "https://twitter.com/weblikespider",
      linkedIn: "https://www.linkedin.com/in/jonas-gustavsson-2a72a2108/",
      github: "https://github.com/Feekar/",
      email: "mailto:jonas@weblikespider.com",
    },
  },
  plugins: [
    "gatsby-plugin-sitemap",
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
            resolve: "gatsby-remark-embedded-codesandbox",
            options: {
              directory: `${__dirname}/content/blog/`,
              // Customise Codesandbox embedding options:
              // https://codesandbox.io/docs/embedding#embed-options
              // default:
              embedOptions: {
                view: "preview",
                hidenavigation: 1,
              },
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 450,
              wrapperStyle: "margin-left: 0;",
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "<",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-166969088-1",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "WebLikeSpider",
        short_name: "WLS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#548fff",
        display: "minimal-ui",
        icon: "content/assets/favicon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
