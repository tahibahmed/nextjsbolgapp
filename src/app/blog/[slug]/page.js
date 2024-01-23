import React, { Suspense } from "react";
import Styles from "./single.module.css";
import Image from "next/image";
import Postuser from "@/components/Postuser/Postuser";
import { getpost } from "@/lib/data";

const getData = async (slug) => {
 
  const res = await fetch(`http://localhost:3000/api/post/${slug}`);
  if (!res.ok) {
    throw new Error("Something wet Wrong");
  }
  return res.json();
};


async function SinglePage({ params }) {
  console.log(params)
  const { slug } = params;
  const post = await getData(slug);
  console.log(post)



  return (
    <div className={Styles.container}>
    
        <div className={Styles.imgcontainer}>
          <Image src={post.img} alt="" fill className={Styles.img} />
        </div>
   
      <div className={Styles.textcontainer}>
        <h1 className={Styles.title}>{post.title}</h1>
        <div className={Styles.detail}>
          <Image
            src={post.img}
            alt=""
            width={50}
            height={50}
            className={Styles.avatar}
          />
          <Suspense fallback={<div>Loading....</div>}>
            <Postuser userId={post.userId} />
          </Suspense>

          <div className={Styles.detailstext}>
            <span className={Styles.detailtitle}>publised</span>
            <span className={Styles.detailvalue}>1-1-24</span>
          </div>
        </div>
        <div className={Styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}

export default SinglePage;
