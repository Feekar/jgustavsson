/* eslint-disable no-unused-vars */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./styles.module.scss";

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              email
              linkedIn
              github
            }
          }
        }
      }
    `
  );

  const {
    site: {
      siteMetadata: {
        social: { twitter, linkedIn, github, email },
      },
    },
  } = data;

  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a href={twitter}>Twitter</a>
        </li>
        <li>
          <a href={email}>Email</a>
        </li>
        <li>
          <a href={linkedIn}>LinkedIn</a>
        </li>
        <li>
          <a href={github}>GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
