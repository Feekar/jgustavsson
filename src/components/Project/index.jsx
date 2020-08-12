import React from "react";
import Img from "gatsby-image";

import LinkButton from "../LinkButton";

import externalLinkIcon from "../../../content/assets/external-link.svg";
import githubIcon from "../../../content/assets/github.svg";

import styles from "./styles.module.scss";

const Project = ({ project }) => {
  const { name, description, url, github, image } = project;

  return (
    <div className={styles.project}>
      <Img className={styles.image} fluid={image} alt="Jonas Gustavsson" />
      <div className={styles.right}>
        <div>
          <h2 className={styles.title}>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.bottom}>
          <LinkButton
            text="Go to site"
            type="external"
            url={url}
            icon={externalLinkIcon}
          />
          <LinkButton
            className={styles.github}
            text="GitHub"
            type="external"
            url={github}
            icon={githubIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
