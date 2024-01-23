"use client";

import { register } from "@/lib/action";
import styles from "./registerform.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  console.log(state)

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
    <input type='text' placeholder='username' name='username'/>
        <input type='email' placeholder='email' name='email'/>
        <input type='password' placeholder='password' name='password'/>
        <input type='password' placeholder='confirmpassword' name='cpassword'/>
        <button>Create account</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;