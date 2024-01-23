import Image from "next/image";
import React from "react";
import Styles from "./about.module.css";

const Aboutpage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textcontainer}>
        <h2 className={Styles.subtitle}>About Agency</h2>
        <h1 className={Styles.title}>We Create digital ideas that are bigger bolder braver and better </h1>
        <p>We Create digital ideas that are bigger bolder braver and better write worlds our special team best consulting france solution provider wide range of web and software development services</p>
        <div className={Styles.boxes}>
          <div className={Styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={Styles.box}>
          <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={Styles.box}>
          <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={Styles.imgcontainer}>
        <Image src={"/about.svg"} className={Styles.img} alt="" fill />
      </div>
    </div>
  );
};

export default Aboutpage;
