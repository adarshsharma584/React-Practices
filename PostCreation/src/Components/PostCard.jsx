import React from "react";

function PostCard(prop) {
  const handleEdit = () => {
    console.log("edit btn clicked");
  };

  const handleDelete = () => {
    console.log("delete btn clicked");
  };
  return (
    <>
      <div className="container">
        <div className="title">
          <span>Title :</span> {prop.title}
        </div>
        <div className="post-para">
          <span>Body : </span>
          {prop.body}
        </div>
        <div className="container-btn">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default PostCard;
