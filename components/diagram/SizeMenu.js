import React from "react";
import styled, { withTheme } from "styled-components";
import { ReactComponent as ZoomInIcon } from "../../assets/zoom-in-ico.svg";
import { ReactComponent as ZoomOutIcon } from "../../assets/zoom-out-ico.svg";
import { ReactComponent as NormalIcon } from "../../assets/normal-size-ico.svg";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
`;

const StyledButton = styled.button`
  height: 3rem;
  width: 3rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    animation: buttonBlink 0.2s;
  }

  svg {
    fill: ${({ theme }) => theme.sizeMenuButton_backgroundColor};
  }
`;

const StyledNormalButton = styled(StyledButton)`
  margin-top: 1rem;

  svg {
    fill: ${({ theme }) => theme.sizeMenuButton_NormalSize_backgroundColor};
  }
`;

const SizeMenu = ({ zoomIn, zoomOut, zoomNormal, className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledButton onClick={() => zoomIn()} title="Powiększ">
        <ZoomInIcon />
      </StyledButton>
      <StyledButton onClick={() => zoomOut()} title="Zmniejsz">
        <ZoomOutIcon />
      </StyledButton>
      <StyledNormalButton
        onClick={() => zoomNormal()}
        title="Oryginalny rozmiar"
      >
        <NormalIcon />
      </StyledNormalButton>
    </StyledWrapper>
  );
};

export default withTheme(SizeMenu);
