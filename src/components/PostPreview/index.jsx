import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

const PostPreview = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node;

  const title = frontmatter.title || fields.slug;
  return (
    <article className={styles.postPreview} key={fields.slug}>
      <header>
        <h2>
          <Link style={{ boxShadow: `none` }} to={fields.slug}>
            {title}
          </Link>
        </h2>
        <small>{frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt,
          }}
        />
      </section>
    </article>
  );
};

export default PostPreview;
