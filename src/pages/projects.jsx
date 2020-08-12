import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import Project from "../components/Project";

import styles from "./projects.module.scss";

const projects = ({ data }) => {
  const images = data.allFile.edges.map(edge => {
    return edge.node.childImageSharp.fluid;
  });

  const projectsList = [
    {
      name: "JGustavsson",
      description:
        "My blog & portfolio site. The one you're currently on to be exact. Made with GatsbyJS.",
      url: "https://www.jgustavsson.com",
      github: "https://github.com/Feekar/jgustavsson",
      image: images.find(image => image.originalName === "jgustavsson.png"),
    },
    {
      name: "My bot dad",
      description:
        "Why have a dad when you can have a bot dad? Yeah I don't know why I made this ¯\\_(ツ)_/¯. Vanilla JavaScript and CSS.",
      url: "https://feekar.github.io/my-bot-dad/",
      github: "https://github.com/Feekar/my-bot-dad",
      image: images.find(image => image.originalName === "my-dad-bot.png"),
    },
    {
      name: "Träverkstaden",
      description:
        "A not yet finished portfolio for a furniture maker. Made with GatsbyJS and Netlify CMS.",
      url: "https://traverkstaden.netlify.app/",
      github: "https://github.com/Feekar/traverkstaden",
      image: images.find(image => image.originalName === "traverkstaden.png"),
    },
  ];

  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className={styles.title}>Some stuff I made</h1>
      {projectsList.map(project => {
        return <Project project={project} key={project.name} />;
      })}
    </Layout>
  );
};

export default projects;

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`;
