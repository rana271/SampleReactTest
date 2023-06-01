import React, { useState, useEffect } from "react";

const HelloWorld = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    console.log(document.readyState);
    alert("We are in useEffect function");
    fetch("http://localhost:3001/test")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);
  return (
    <div>
      <h2>Employees Data... {data.code}</h2>
      <h2>Employees Data... {data.name}</h2>
      <h2>Employees Data... {data.gender}</h2>
    </div>
  );
};

export default HelloWorld;
