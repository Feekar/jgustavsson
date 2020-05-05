import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerContainer}>
        <Link to="/" className={styles.logo}>
          <span>&lt;</span>
          LikeASpider
          <span>/&gt;</span>
        </Link>
        <nav>Nav links bla</nav>
      </div>
    </header>
  );
};

export default Header;
