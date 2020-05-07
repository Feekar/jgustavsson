import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span>&lt;</span>
        WebLikeSpider
        <span>/&gt;</span>
      </Link>
      <nav className={styles.nav}>
        <Link to="/">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
