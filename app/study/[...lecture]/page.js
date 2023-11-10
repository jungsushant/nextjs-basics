import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>{params?.lecture[0]}</h1>
      <h1>{params?.lecture[1]}</h1>
    </div>
  );
};

export default page;
