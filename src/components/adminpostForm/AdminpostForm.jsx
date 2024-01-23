"use client";
import { addPost } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";
import Styles from "./adminpostForm.module.css";

const AdminpostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    
      <form className={Styles.container} action={formAction}>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="img" placeholder="img url" />
        <textarea name="desc" placeholder="description" rows={10}>
          
        </textarea>
        <button>add</button>
        {state && state.error}
      </form>
    
  );
};

export default AdminpostForm;
