import React, { useRef, useState } from "react";
import styled from "styled-components";
import Drawing from "./Drawing";

const StyledWrapper = styled.div`
  fill: none;
  cursor: none;
  transform: scale(${({ zoom }) => zoom});

  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledCursor = styled.div.attrs(({ position, size }) => ({
  style: {
    top: `${position.y - size / 2}px`,
    left: `${position.x - size / 2}px`,
  },
}))`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const DrawArea = ({ lines, setLines, color, zoom, className }) => {
  const drawAreaRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseDown = (mouseEvent) => {
    if (mouseEvent.button != 0) return;

    const point = relativeCoordinatesForEvent(mouseEvent);

    setIsDrawing(true);
    setLines((prev) => [...prev, { points: [point], color }]);
  };

  const handleMouseMove = (event) => {
    const point = relativeCoordinatesForEvent(event);

    setCursorPosition(point);
    setShowCursor(true);

    if (!isDrawing) return;

    setLines((prev) => {
      const lastLine = prev[prev.length - 1];
      const newLine = { points: [...lastLine.points, point], color };
      return [...prev.slice(0, -1), newLine];
    });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseLeave = () => {
    setIsDrawing(false);
    setShowCursor(false);
  };

  const relativeCoordinatesForEvent = (mouseEvent) => {
    const boundingRect = drawAreaRef.current.getBoundingClientRect();
    return {
      x: (mouseEvent.clientX - boundingRect.left) / zoom,
      y: (mouseEvent.clientY - boundingRect.top) / zoom,
    };
  };

  return (
    <StyledWrapper
      ref={drawAreaRef}
      className={className}
      zoom={zoom}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <Drawing lines={lines} />
      <StyledCursor
        isVisible={showCursor}
        position={cursorPosition}
        color={color}
        size={6}
      />
    </StyledWrapper>
  );
};

export default DrawArea;
