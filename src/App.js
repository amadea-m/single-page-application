import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "hello",
      content: "this is my description",
      creationDate: "3 May",
      upvote: true,
    },
    {
      id: 2,
      title: "hello2",
      content: "this is my description2",
      creationDate: "4 May",
      upvote: true,
    },
    {
      id: 3,
      title: "hello3",
      content: "this is my description3",
      creationDate: "5 May",
      upvote: true,
    },
  ]);
  const [selectedPost, setSelectedPost] = useState(false);

  const handleVote = (id, vote) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        if (vote === "up") {
          post.upvote = false;
        } else {
          post.upvote = true;
        }
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  const editPost = (editedPost) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === editedPost.id) {
        return editedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <CreatePost
        createPost={createPost}
        selectedPost={selectedPost}
        editPost={editPost}
        setSelectedPost={setSelectedPost}
      />
      <Posts
        posts={posts}
        handleVote={handleVote}
        removePost={removePost}
        setSelectedPost={setSelectedPost}
      />
    </div>
  );
}

export default App;
