
import PostCard from "@/components/postCard/PostCard";
import React from "react";
import Styles from "./blog.module.css";
import { getposts } from "@/lib/data";

const getData = async()=>{
  const res = await fetch('http://localhost:3000/api/post',{next:{revalidate :3600}})

  if(!res.ok){
    throw new Error("Something wet Wrong")
  }
  return res.json()
}

const BlogPage = async() => {

  const Postss = await getData()

 
 

  return (
    <div className={Styles.container}>
      {Postss.map((posts)=>(
      <div className={Styles.post} key={posts.id}>
        <PostCard posts={posts}  />
      </div>
      ))}
    </div>
  );
};

export default BlogPage;
