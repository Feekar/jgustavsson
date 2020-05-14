import React from "react";
import LinkButton from "../LinkButton";
import twitter from "../../../content/assets/twitter.svg";

const TwitterButton = ({ title, href }) => {
  const twitterText = `https://twitter.com/intent/tweet?text=${title}: ${href} @weblikespider`;

  return (
    <LinkButton
      type="external"
      text="Tweet it"
      url={twitterText}
      icon={twitter}
      target="_blank"
    />
  );
};

export default TwitterButton;
