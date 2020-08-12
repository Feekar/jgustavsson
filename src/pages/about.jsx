import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import twitterIcon from "../../content/assets/twitter.svg";
import mailIcon from "../../content/assets/mail.svg";
import linkedinIcon from "../../content/assets/linkedin.svg";
import githubIcon from "../../content/assets/github.svg";

import styles from "./styles.module.scss";

const About = props => {
  const {
    data: {
      site: {
        siteMetadata: {
          social: { twitter, linkedIn, github, email },
        },
      },
      file: {
        childImageSharp: { fluid },
      },
    },
  } = props;

  return (
    <Layout>
      <SEO title="About" />
      <div className={styles.about}>
        <div>
          <Img
            className={styles.profile}
            fluid={fluid}
            alt="Jonas Gustavsson"
          />
          <h1 className={styles.name}>Jonas Gustavsson</h1>
        </div>
        <div>
          <h2 className={styles.title}>Who</h2>
          <span>am I?</span>
        </div>
        <p>
          I work professionally as a web developer and create silly little web
          apps in my spare time.
          <br />
          <br />
          The reason I&rsquo;m writing articles is not so much about spreading
          knowledge (though a nice bonus to be sure) as it is about me learning
          by teaching. To explain a topic well I have to push myself to dig deep
          and understand it.
        </p>
        <br />
        <p>
          For any questions or queries feel free to <b>contact me</b> at:
        </p>
        <ul className={styles.links}>
          <li>
            <a href={twitter}>
              <img src={twitterIcon} alt="twitter" />
              Twitter
            </a>
          </li>
          <li>
            <a href={email}>
              <img src={mailIcon} alt="external link" />
              Email
            </a>
          </li>
          <li>
            <a href={linkedIn}>
              <img src={linkedinIcon} alt="external link" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={github}>
              <img src={githubIcon} alt="external link" />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        social {
          twitter
          linkedIn
          github
          email
        }
      }
    }
  }
`;
