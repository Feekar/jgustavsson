import React from "react";

import styles from "./styles.module.scss";

import TwitterButton from "../TwitterButton";

const PostShare = ({ title, href }) => {
  return (
    <aside className={styles.container}>
      <div className={styles.twitter}>
        <TwitterButton title={title} href={href} />
      </div>
    </aside>
  );
};

export default PostShare;
