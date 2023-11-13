"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const navigate = useRouter();
  const [ddata, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setData(data.products);
    }
    fetchData();
  }, []);

  return (
    <div>
      page
      <br />
      <button onClick={() => navigate.push("/")}>Go to Home</button>
      {ddata.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
};

export default page;
