import React from "react";
import User from "./User";

const Child = ({ userName }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Child Component</h3>
      <User/>
    </div>
  );
};

export default Child;