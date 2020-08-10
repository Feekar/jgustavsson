/* eslint-disable no-unused-vars */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import twitterIcon from "../../../content/assets/twitter.svg";
import githubIcon from "../../../content/assets/github.svg";
import linkedinIcon from "../../../content/assets/linkedin.svg";
import mailIcon from "../../../content/assets/mail.svg";

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

  console.log(data.file);
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
          <a href={twitter}>
            <img src={twitterIcon} alt="twitter" />
          </a>
        </li>
        <li>
          <a href={email}>
            <img src={mailIcon} alt="email" />
          </a>
        </li>
        <li>
          <a href={linkedIn}>
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href={github}>
            <img src={githubIcon} alt="github" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

// const imageFragment = graphql`
//   fragment imageFragment on File {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;
