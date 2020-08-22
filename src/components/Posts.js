import React from "react";

const Posts = ({ posts, handleVote, removePost, setSelectedPost }) => {
  return (
    <div className="posts">
      <hr />
      <h1>Posts:</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span>{post.creationDate}</span>
            {post.upvote ? (
              <button onClick={() => handleVote(post.id, "up")}>Upvote</button>
            ) : (
              <div>
                <span>+1</span>
                <button onClick={() => handleVote(post.id, "down")}>
                  Downvote
                </button>
              </div>
            )}
            <div className="buttons">
              <button className="remove" onClick={() => removePost(post.id)}>
                Remove
              </button>
              <button className="edit" onClick={() => setSelectedPost(post)}>
                Edit Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Posts;
