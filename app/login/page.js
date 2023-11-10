'use client'

import Link from "next/link"

const page = () => {
  return (
    <div><h1>Login Page</h1>
    <button><Link href='/'>Home page</Link></button></div>
  )
}

export default page