import React, { useState, useEffect } from "react";
var month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CreatePost = ({
  createPost,
  selectedPost,
  editPost,
  setSelectedPost,
}) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  const handleChange = (e) => setTitle(e.target.value);
  const handleTextareaChange = (e) => setContent(e.target.value);

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [selectedPost]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTitleError("");
    setContentError("");
    if (title.length < 3) {
      setTitleError("The title should contain at least 3 letters");
    }
    if (content.length < 5) {
      setContentError("The content should contain at least 5 letters");
    }
    if (title.length < 3 || content.length < 5) return;

    if (selectedPost) {
      editPost({
        id: selectedPost.id,
        title: title,
        content: content,
        creationDate: selectedPost.creationDate,
        upvote: selectedPost.upvote,
      });
    } else {
      const creationDate = new Date();
      createPost({
        id: Math.floor(Math.random() * 100),
        title: title,
        content: content,
        creationDate:
          creationDate.getDate() + " " + month[creationDate.getMonth()],
        upvote: true,
      });

      // setTitle("");
      // setContent("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{selectedPost ? "Edit Post" : "Create Post"}</h1>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={handleChange}
      />
      {titleError && <span className="error">{titleError}</span>}
      <textarea
        name="content"
        placeholder="content"
        id=""
        cols="30"
        rows="10"
        value={content}
        onChange={handleTextareaChange}
      ></textarea>
      {contentError && <span className="error">{contentError}</span>}
      <button type="submit">Submit</button>
      {selectedPost && (
        <button className="create-btn" onClick={() => setSelectedPost(false)}>
          Go back to Create
        </button>
      )}
    </form>
  );
};
export default CreatePost;
