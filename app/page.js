'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const apple=()=> {
    alert("hello")
  }

  const InnerComp =()=> {
    return (
      <h1>hello</h1>
    )
  }
  return (
    <>
    <h1>Events, function and state</h1>
    <button onClick={()=> (apple)}>click me</button>
    {<InnerComp/>}
    <button><Link href='/login'>Login page</Link></button>

    </>
  )
}
