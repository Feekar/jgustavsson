import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
