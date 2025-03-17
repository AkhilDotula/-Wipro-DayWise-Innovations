import React from "react";
import Child from "./Child";

const Parent = ({ userName }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Parent Component</h2>
      <Child/>
    </div>
  );
};

export default Parent;