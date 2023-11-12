"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const navigate = useRouter();
  return (
    <div>
      page
      <br />
    </div>
  );
};

export default page;
