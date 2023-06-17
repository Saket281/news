import React from "react";

export const ExtraInfo = ({ title, cardData }) => {
  let today = new Date();
  return (
    <div>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
        {cardData.map((item) => {
          return (
            <div
              style={{
                padding: "22px",
                border: "2px solid white",
                borderRadius: "16px",
                backgroundColor: "white",
                marginBottom: "8px",
              }}
            >
              <h2 style={{ backgroundColor: "white", color: "black" }}>
                Date : {today.toLocaleDateString("en-US")}
              </h2>
              <p
                style={{
                  fontSize: "40px",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                {item.heading}
              </p>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  justifyContent: "space-between",
                  padding: "22px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    border: "2px solid white",
                    width: "500px",
                    padding: "20px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  {" "}
                  <p>{item.para}</p>
                  <div
                    style={{
                      padding: "10px",
                      textAlign: "center",

                      float: "right",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      style={{
                        padding: "10px 20px 10px 20px",
                        textAlign: "center",
                        backgroundColor: "grey",
                        color: "black",
                        borderRadius: "8px",
                        border: "2px solid white",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      Read More ...
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={item.imgTag}
                    style={{ width: "500px", height: "240px" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div
          style={{
            padding: "10px",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: "10px",
            flexDirection: "flexEnd",
          }}
        >
          <button
            style={{
              padding: "10px 20px 10px 20px",
              textAlign: "center",
              backgroundColor: "#3ABEFF",
              color: "white",
              borderRadius: "8px",
              border: "2px solid white",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};
