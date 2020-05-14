import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

import arrow from "../../../content/assets/arrow.svg";

const PostBottomNav = ({ previous, next }) => {
  return (
    <section className={styles.container}>
      <div>
        {previous && (
          <Link to={previous.fields.slug} rel="prev" className={styles.link}>
            <img src={arrow} alt="arrow" className={styles.arrowLeft} />{" "}
            {previous.frontmatter.title}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={next.fields.slug} rel="next" className={styles.link}>
            {next.frontmatter.title}{" "}
            <img src={arrow} alt="arrow" className={styles.arrowRight} />
          </Link>
        )}
      </div>
    </section>
  );
};

export default PostBottomNav;
