import React from "react";
import styled, { css, withTheme } from "styled-components";
import { ReactComponent as SunIcon } from "../../assets/sun-ico.svg";
import { ReactComponent as MoonIcon } from "../../assets/moon-ico.svg";

const StyledWrapper = styled.div`
  position: fixed;
  top: 1.5rem;
  right: clamp(0.5rem, 2vw, 1rem);
  z-index: 200;
`;

const StyledButton = styled.button`
  width: clamp(2rem, 10vw, 3rem);
  height: clamp(2rem, 10vw, 3rem);

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
    `}

  transition: transform 0.1s ease;
  &:hover {
    transition: transform 0.2s cubic-bezier(0.18, 0.89, 1, 5.0);
    transform: scale(1.1);
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const { isDark } = theme;
  const title = `Włącz tryb ${isDark ? "jasny" : "ciemny"}`;
  return (
    <StyledWrapper>
      <StyledButton onClick={() => toggleTheme()} title={title}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </StyledButton>
    </StyledWrapper>
  );
};

export default withTheme(ThemeToggle);
