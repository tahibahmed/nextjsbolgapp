
import React from 'react'

import RegisterForm from '@/components/registerform/RegisterForm'
import Styles from "./register.module.css"

const RegisterPage = () => {

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
      <RegisterForm/>
      </div>
    </div>
  )
}

export default RegisterPage