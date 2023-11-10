import Link from "next/link";
import React from "react";

const studentLogin = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login/student/ram">ram</Link>
        </li>
        <li>
          <Link href="/login/student/shyam">shyam</Link>
        </li>
        <li>
          <Link href="/login/student/sushil">sushil</Link>
        </li>
      </ul>
    </div>
  );
};

export default studentLogin;
