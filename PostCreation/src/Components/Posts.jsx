import React from "react";
import { getPostData } from "../api/PostAPI";
import PostCard from "./PostCard";

function Posts() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    try {
      const res = await getPostData();
      setData(res.data);
    } catch {
      (error) => {
        console.log("error:", error);
      };
    }
  };
  getData();
  return (
    <>
      

      <ul>
        {" "}
        {data.map((post) => {
          return <li key={post.id}>
            <PostCard title={post.title} body={post.body} />
          </li>;
        })}
      </ul>
    </>
  );
}

export default Posts;
//  <p>`Title:${post.title}`</p>
//               <br></br>
//               <p>`Body:${post.body}`</p>
