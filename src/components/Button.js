import React from "react";

const Button = (props) => {
  const colors = [
    "#FFBAAA",
    "#27576B",
    "#D47F6A",
    "#AA7539",
    "#003D19",
    "#6E91A1",
    "#552D00",
  ];

  return (
    <button
      style={{ background: props.color, height: "100px", width: "100px" }}
      onClick={() => props.changeColor(colors)}
    >
      Click Me!
    </button>
   
   
  )
};

export default Button;
