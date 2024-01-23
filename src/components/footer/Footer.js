import React from 'react'
import Styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        Tahib AHmed
      </div>
      <div className={Styles.text}>
        All Copy right Reserved @2024
      </div>
    </div>
  )
}

export default Footer