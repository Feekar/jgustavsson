import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import styles from "./projects.module.scss";

const projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className={styles.title}>Some stuff I made</h1>
    </Layout>
  );
};

export default projects;
