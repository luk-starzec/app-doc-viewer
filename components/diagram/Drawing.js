import React from "react";
import DrawingLine from "./DrawingLine";

const Drawing = ({ lines }) => {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <DrawingLine key={index} points={line.points} color={line.color} />
      ))}
    </svg>
  );
};

export default Drawing;
