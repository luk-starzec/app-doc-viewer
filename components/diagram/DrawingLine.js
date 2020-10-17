import React from "react";

const DrawingLine = ({ points, color }) => {
  const pathData = "M " + points.map(({ x, y }) => `${x} ${y}`).join(" L ");

  return <path d={pathData} stroke={color} />;
};

export default DrawingLine;
