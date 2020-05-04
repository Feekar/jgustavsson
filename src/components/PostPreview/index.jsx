import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node;

  const title = frontmatter.title || fields.slug;
  return (
    <article key={fields.slug}>
      <header>
        <h3>
          <Link style={{ boxShadow: `none` }} to={fields.slug}>
            {title}
          </Link>
        </h3>
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
