import React from "react";

export const Parallax = ({ myImage }) => {
  return (
    <div
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "blue",
        minHeight: "500px",
        backgroundImage: `url(${myImage})`,
      }}
    ></div>
  );
};
