"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const apple = () => {
    alert("hello");
  };

  const InnerComp = () => {
    return <h1>hello</h1>;
  };
  const router = useRouter();
  return (
    <>
      <h1>Events, function and state</h1>
      <button onClick={() => apple}>click me</button>
      {<InnerComp />}
      <button>
        <Link href="/login">Login page</Link>
      </button>
      <br />
      <button onClick={() => router.push("/about")}>go to about us page</button>
    </>
  );
}
