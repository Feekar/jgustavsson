import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import linkIcon from "../../content/assets/external-link.svg";

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
          apps on my spare time.
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
              Twitter <img src={linkIcon} alt="external link" />
            </a>
          </li>
          <li>
            <a href={email}>
              Email <img src={linkIcon} alt="external link" />
            </a>
          </li>
          <li>
            <a href={linkedIn}>
              LinkedIn
              <img src={linkIcon} alt="external link" />
            </a>
          </li>
          <li>
            <a href={github}>
              GitHub <img src={linkIcon} alt="external link" />
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
