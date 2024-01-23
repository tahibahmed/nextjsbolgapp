import { getposts } from "@/lib/data";
import React from "react";
import Styles from "./adminpost.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const Adminpost = async () => {
  
  const Posts = await getposts();
  console.log(Posts);

  return (
    <div className={Styles.container}>
      <h1>POSTS</h1>
      {Posts.map((post) => (
        <div className={Styles.post} key={post.id}>
          <div className={Styles.details}>
            <Image src={post.img||"/undraw.png"} alt="" width={50} height={50} />
            <span>{post.title}</span>
          </div>
         <form action={deletePost}>
          <input type="hidden" name="id" value={post.id}/>
         <button className={Styles.postbutton}>delete</button>
         </form>
        </div>
      ))}
    </div>
  );
};

export default Adminpost;
