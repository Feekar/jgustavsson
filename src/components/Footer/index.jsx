import React from "react";

import style from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span>Made with </span>
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <span> and covid-driven development</span>
    </footer>
  );
};

export default Footer;
