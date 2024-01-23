import React from 'react'
import Links from './links/Links'
import Styles from "./Navbar.module.css"
import Link from 'next/link'
import { auth } from '@/lib/auth'

const Navbar = async() => {
  const session = await auth()


  return (
    <div className={Styles.container}>
      <Link href={'/'} className={Styles.logo}>Blogger App</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar