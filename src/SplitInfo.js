import React from "react";

export const SplitInfo = ({ myImage, title, cardData }) => {
  return (
    <div
      style={{
        border: "2px solid white",
        padding: "20px",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          color: "white",
        }}
      >
        <h1 style={{ color: "black" }}>{title}</h1>
      </div>
      <div style={{ height: "600px", overflow: "auto", padding: "10px" }}>
        {cardData.map((item) => {
          return (
            <div
              style={{
                padding: "20px",
                border: "2px solid white",
                borderRadius: "8px",
                color: "black",
                marginBottom: "10px",
                backgroundColor: "white",
                display: "flex",
              }}
            >
              <p>{item.label}</p>
              <div>
                <img
                  src={item.imgTag}
                  style={{ width: "75px", height: "75px" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          padding: "10px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "10px",
        }}
      >
        <button
          style={{
            padding: "10px 20px 10px 20px",
            textAlign: "center",
            backgroundColor: "black",

            color: "white",
            borderRadius: "12px",
            // border: "2px solid white",
            cursor: "pointer",
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};
