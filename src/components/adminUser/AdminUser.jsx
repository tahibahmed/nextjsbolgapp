import { deleteuser } from '@/lib/action';
import { getusers } from '@/lib/data';
import React from 'react'
import Styles from './AdminUser.module.css'
import Image from 'next/image';

const AdminUser = async() => {
  
  const Posts = await getusers();
  console.log(Posts);

  return (
    <div className={Styles.container}>
      <h1>USERS</h1>
      {Posts.map((post) => (
        <div className={Styles.post} key={post.id}>
          <div className={Styles.details}>
            <Image src={post.img||"/undraw.png"} alt="" width={50} height={50} />
            <span>{post.username}</span>
          </div>
         <form action={deleteuser}>
          <input type="hidden" name="id" value={post.id}/>
         <button className={Styles.postbutton}>delete</button>
         </form>
        </div>
      ))}
    </div>
  );
}

export default AdminUser