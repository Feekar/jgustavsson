import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PostShare from "../components/PostShare";
import PostShareBottom from "../components/PostShareBottom";
import PostBottomNav from "../components/PostBottomNav";

import SEO from "../components/seo";

import styles from "./styles.module.scss";
import ScrollProgressIndicator from "../components/ScrollProgressIndicator";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ScrollProgressIndicator />
      <div>
        <article>
          <header className={styles.header}>
            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
          </header>
          <div className={styles.main}>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <PostShare title={post.frontmatter.title} href={location.href} />
          </div>
          <footer className={styles.footer}>
            <PostShareBottom
              title={post.frontmatter.title}
              href={location.href}
            />
          </footer>
        </article>
        <PostBottomNav previous={previous} next={next} />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
