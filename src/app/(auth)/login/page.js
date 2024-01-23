import { handlesign } from "@/lib/action";
import React from "react";
import Styles from "./login.module.css";
import LoginForm from "@/components/loginform/LoginForm";

const LoginPage = async () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <form action={handlesign}>
          <button className={Styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
