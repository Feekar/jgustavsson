import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

import linkIcon from "../../content/assets/external-link.svg";

import styles from "./styles.module.scss";

// eslint-disable-next-line no-unused-vars
const Contact = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className={styles.contact}>
        <div>
          <h2 className={styles.title}>Why</h2>
          <span>am I doing this?</span>
        </div>
        <p>
          The reason I&rsquo;m doing this is not so much about spreading my
          unbelievably vast knowledge as it is about me learning by teaching. To
          explain a topic well I have to really push myself to dig deep and
          understand it.
        </p>
        <br />
        <p>
          For any questions or queries feel free to <b>contact me</b> at:
        </p>
        <ul className={styles.links}>
          <li>
            <a href="https://twitter.com/weblikespider/">
              Twitter <img src={linkIcon} alt="external link" />
            </a>
          </li>
          <li>
            <a href="mailto:jonasgson@outlook.com">
              Email <img src={linkIcon} alt="external link" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonas-gustavsson-2a72a2108/">
              LinkedIn
              <img src={linkIcon} alt="external link" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Feekar/">
              GitHub <img src={linkIcon} alt="external link" />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Contact;
