import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          border: "2px solid white",
          padding: "20px",
          backgroundColor: "white",
          color: "black",
          display: "flex",
          justifyContent: "space-evenly",
          borderBottom: "0.5px solid black",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "2px solid white",
            borderRadius: "8px",
            color: "black",
            marginBottom: "10px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li style={{ listStyle: "none", cursor: "pointer" }}>contact us</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>about us</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>advertise</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>
            Privacy Policy
          </li>
        </div>
        <div
          style={{
            padding: "20px",
            border: "2px solid white",
            borderRadius: "8px",
            color: "black",
            marginBottom: "10px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li style={{ listStyle: "none", cursor: "pointer" }}>ePaper</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>Top Trends</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>New Sites</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>Archives</li>
        </div>
        <div
          style={{
            padding: "20px",
            border: "2px solid white",
            borderRadius: "8px",
            color: "black",
            marginBottom: "10px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li style={{ listStyle: "none", cursor: "pointer" }}>Offices</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>Services</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>Living</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>
            Entertainment
          </li>
        </div>
        <div
          style={{
            padding: "20px",
            border: "2px solid white",
            borderRadius: "8px",
            color: "black",
            marginBottom: "10px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li style={{ listStyle: "none", cursor: "pointer" }}>Terms of Use</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>Download App</li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>follow us</li>
        </div>
      </div>
      <div
        style={{
          color: "black",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        ALL RIGHTS RESRVED TO MR GARG
      </div>
    </div>
  );
};
export default Footer;
