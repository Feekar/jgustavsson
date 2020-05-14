import React from "react";
import PostPreview from "../PostPreview";
import styles from "./styles.module.scss";

const Posts = ({ posts }) => {
  return (
    <>
      <h1 className={styles.header}>Web Development Articles</h1>
      <span className={styles.allPosts}>ALL POSTS</span>
      {posts.map(post => {
        return <PostPreview post={post} key={post.node.fields.slug} />;
      })}
    </>
  );
};

export default Posts;
