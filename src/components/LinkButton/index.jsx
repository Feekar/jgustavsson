import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

// eslint-disable-next-line no-unused-vars
const LinkButton = ({ text, type, url, icon, target = "_self", className }) => {
  return type.toLowerCase() === "internal" ? (
    <Link to={url} className={`${styles.button} ${className}`}>
      {text}

      <img src={icon} alt={text} />
    </Link>
  ) : (
    <a
      href={url}
      className={`${styles.button} ${className}`}
      target={target}
      rel="noopener noreferrer"
    >
      {text}

      <img src={icon} alt={text} />
    </a>
  );
};

export default LinkButton;
