import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

// eslint-disable-next-line no-unused-vars
const LinkButton = ({ text, type, url, icon, target = "_self" }) => {
  return type.toLowerCase() === "internal" ? (
    <Link to={url} className={styles.button}>
      <img src={icon} alt={text} />
      {text}
    </Link>
  ) : (
    <a
      href={url}
      className={styles.button}
      target={target}
      rel="noopener noreferrer"
    >
      <img src={icon} alt={text} />
      {text}
    </a>
  );
};

export default LinkButton;
