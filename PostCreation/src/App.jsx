import React from "react";
import Posts from "./Components/Posts";
import PostCard from "./Components/PostCard";

function App() {
  return (
    <>
      <h1 className="post-h1">Posts</h1>
      <div className="post-compartment">
        
        <Posts/>

      </div>
        
    </>
  );
}

export default App;
