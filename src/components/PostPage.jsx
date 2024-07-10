// src/components/PostPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, selectPosts } from "../features/postsSlice";

const PostPage = () => {
  const { id } = useParams();
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={handleDelete}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
