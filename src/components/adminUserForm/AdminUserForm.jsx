"use client"
import { adduser } from '@/lib/action';
import React from 'react'
import { useFormState } from "react-dom";
import Styles from './adminUserForm.module.css'

const AdminUserForm = () => {
  const [state, formAction] = useFormState(adduser, undefined);
  return (
    
    <form className={Styles.container} action={formAction}>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="email" placeholder="password" />
      <input type="text" name="img" placeholder="img url" />
      <select name='isAdmin'>
      <option  value="false">is Admin ?</option>
        <option  value="false">No</option>
        <option  value="true">Yes</option>
      </select>
      <button>adduser</button>
      {state && state.error}
    </form>
   
  );
}

export default AdminUserForm