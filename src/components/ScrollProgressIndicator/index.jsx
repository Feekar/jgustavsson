/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import { throttle } from "../../utils";

import styles from "./styles.module.scss";

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.clientHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / totalHeight;

    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 100), {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.bar}
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;
