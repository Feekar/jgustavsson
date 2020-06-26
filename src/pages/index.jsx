import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Posts from "../components/Posts";

const StartPage = ({ data }) => {
  // eslint-disable-next-line no-debugger
  debugger;
  return (
    <Layout>
      <SEO
        title="Web Development Blog"
        description={data.site.siteMetadata.description}
      />
      <Posts posts={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export default StartPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
