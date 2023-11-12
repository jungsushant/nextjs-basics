"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const navigate = useRouter();
  return (
    <div>
      page
      <br />
      <button onClick={() => navigate.push((href = "/"))}>Go to Home</button>
    </div>
  );
};

export default page;
