import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        <span>Made with </span>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <span> and covid-driven development</span>
      </footer>
    </div>
  );
};

export default Layout;
