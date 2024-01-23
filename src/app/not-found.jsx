import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>NotFound</h1>
        <p>Some thing wet Wrong </p>
        <Link href={"/"}>Return Home Page</Link>
    </div>
  )
}

export default NotFound