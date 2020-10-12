import React from "react";
import styled, { css, withTheme } from "styled-components";
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
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;

  ${({ theme }) =>
    !theme.isDark &&
    css`
      background-color: #cadde8;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.10), 0 3px 6px rgba(0, 0, 0, 0.15);
    `}

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
  const title = `Włącz tryb ${isDark ? "jasny" : "ciemny"}`;
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
