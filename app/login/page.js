"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Page</h1>
      <button>
        <Link href="/">Home page</Link>
      </button>
    </div>
  );
};

export default page;
