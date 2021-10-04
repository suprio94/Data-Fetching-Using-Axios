import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [post, setPost] = useState();
  const [postId, setPostId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data.title);
      })
      .catch((error) => {
        setPost("Error Occured!!!");
      });
  }, [idFromButtonClick]);

  return (
    <div className="App">
      <h1>Testing Axios</h1>
      <input value={postId} onChange={(e) => setPostId(e.target.value)}></input>
      <button onClick={() => setIdFromButtonClick(postId)}>Fetch Data</button>
      <h2>{post}</h2>
    </div>
  );
}
