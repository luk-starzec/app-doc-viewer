import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import styled, { css, withTheme } from "styled-components";
import { ReactComponent as RubberIcon } from "../../assets/rubber-ico.svg";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));
`;

const StyledButton = styled.button`
  height: clamp(2rem, 10vw, 3rem);
  width: clamp(2rem, 10vw, 3rem);
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.drawMenuButton_backgroundColor};
  cursor: pointer;
  outline: none;

  transition: transform 0.1s ease;
  &:hover {
    transition: transform 0.2s cubic-bezier(0.18, 0.89, 0.76, 4);
    transform: scale(1.1);
  }
`;

const StyledColor = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  margin: auto;
  border-radius: 0.25rem;
  background-color: ${({ drawColor }) => drawColor};
`;

const DrawMenu = ({ drawColor, setDrawColor, clear, className }) => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const handleColorChange = (color) => {
    setDrawColor(color.hex);
    setColorPickerVisible(false);
  };

  return (
    <StyledWrapper className={className}>
      <StyledButton title="Usuń adnotacje" onClick={clear}>
        <RubberIcon />
      </StyledButton>

      <StyledButton
        title="Kolor adnotacji"
        onClick={() => setColorPickerVisible(!colorPickerVisible)}
      >
        <StyledColor drawColor={drawColor} />
      </StyledButton>

      {colorPickerVisible && (
        <TwitterPicker
          triangle="top-right"
          color={drawColor}
          onChangeComplete={handleColorChange}
        />
      )}
    </StyledWrapper>
  );
};

export default withTheme(DrawMenu);
