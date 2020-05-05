import React from "react";
import PostPreview from "../PostPreview";
import styles from "./styles.module.scss";

const Posts = ({ posts }) => {
  return (
    <>
      <span>Filter by topics</span>
      <br />
      <span className={styles.allPosts}>ALL POSTS</span>
      {posts.map(post => {
        return <PostPreview post={post} />;
      })}
    </>
  );
};

export default Posts;
