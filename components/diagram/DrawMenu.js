import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import styled, { css, withTheme } from "styled-components";
import { ReactComponent as RubberIcon } from "../../assets/rubber-ico.svg";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;

  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))
    drop-shadow(0 3px 3px rgba(0, 0, 0, 0.15));

  ${({ theme }) =>
    theme.isDark &&
    css`
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    `};
`;

const StyledButton = styled.button`
  height: 3rem;
  width: 3rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.drawMenuButton_backgroundColor};
  cursor: pointer;
  outline: none;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    animation: buttonBlinkSmall 0.2s;
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
