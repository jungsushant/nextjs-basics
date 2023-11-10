"use client";

import React from "react";

const studentName = ({ params }) => {
  return <div>{params.name}</div>;
};

export default studentName;
