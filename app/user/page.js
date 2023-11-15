import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

export function generateMetadata({ params }) {
  return {
    title: "page user",
  };
}
