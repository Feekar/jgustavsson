import React from "react";
import Header from "../Header";

import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer>
        <span>Made with </span>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <span> and covid-driven development</span>
      </footer>
    </div>
  );
};

export default Layout;
