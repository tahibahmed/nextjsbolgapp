import React from "react";
import Styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = ({posts}) => {
  console.log(posts)

  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <div className={Styles.imgcontainer}>
          <Image src={posts.img} alt="" fill className={Styles.img} />
        </div>
        <span className={Styles.date}>04-01-2024</span>
      </div>
      <div className={Styles.bottom}>
        <h1 className={Styles.title} >{posts.title}</h1>
        <p  className={Styles.desc}>{posts.desc}</p>
        <Link className={Styles.btnlink} href={`/blog/${posts.slug}`}>Read More </Link>
      </div>
    </div>
  );
};

export default PostCard;
