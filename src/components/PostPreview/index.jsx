import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

const PostPreview = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node;

  const title = frontmatter.title || fields.slug;
  return (
    <Link to={fields.slug} className={styles.container}>
      <article className={styles.postPreview} key={fields.slug}>
        <header>
          <h2>{title}</h2>
          <br />
          <small>{frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: frontmatter.description || excerpt,
            }}
          />
        </section>
        <span className={styles.readMore}>Read article</span>
      </article>
    </Link>
  );
};

export default PostPreview;
