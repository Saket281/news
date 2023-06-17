import React from "react";

export const Navbar = ({ logo }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        color: "black",
        marginLeft: "0px",
        padding: "10px",
        justifyContent: "space-between",
        fontFamily: "serif",
        borderBottom: "0.5px solid black",
      }}
    >
      <img
        src={logo}
        style={{ width: "80px", height: "80px", padding: "5px 30px 5px 30px" }}
      />
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          color: "black ",
          marginLeft: "0px",
          padding: "10px",
          justifyContent: "space-evenly",
          width: "500px",
          fontFamily: "sans-serif",
        }}
      >
        <h2 style={{ cursor: "pointer" }}>Home</h2>
        <h2 style={{ cursor: "pointer" }}>News</h2>
        <h2 style={{ cursor: "pointer" }}>Jobs</h2>
        <h2 style={{ cursor: "pointer" }}>Blog</h2>
      </div>
    </div>
  );
};
