import React from "react";
import styled, { withTheme } from "styled-components";
import { ReactComponent as SunIcon } from "../../assets/sun-ico.svg";
import { ReactComponent as MoonIcon } from "../../assets/moon-ico.svg";

const StyledWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 200;
`;

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme.isDark ? "#292929" : "#CADDE8")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    animation: buttonBlinkSmall 0.2s;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const { isDark } = theme;
  const title = `włącz tryb ${isDark ? "jasny" : "ciemny"}`;
  return (
    <StyledWrapper>
      <StyledButton onClick={() => toggleTheme()} title={title}>
        {isDark && <SunIcon />}
        {!isDark && <MoonIcon />}
      </StyledButton>
    </StyledWrapper>
  );
};

export default withTheme(ThemeToggle);
