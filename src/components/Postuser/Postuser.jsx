import React from 'react'
import Styles from "./Postuser.module.css"
import { getUser } from '@/lib/data'
const getData = async (userId) => {
    const res = await fetch(`http://localhost:3000/api/users/${userId}`);
    if (!res.ok) {
      throw new Error("Something wet Wrong");
    }
    return res.json();
  };
const Postuser = async({userId}) => {

    const User =  await getData(userId)
 console.log(User)

      return (
    <div className={Styles.container}>
    <span className={Styles.title}>Author</span>
    <span className={Styles.username}>{User.username}</span>
  </div>
  )
}

export default Postuser