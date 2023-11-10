"use client";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname !== "/login/student" ? (
        <h1>Common layout for login pages</h1>
      ) : null}
      {children}
    </div>
  );
}
