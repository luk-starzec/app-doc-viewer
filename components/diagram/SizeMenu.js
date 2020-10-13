import React from "react";
import styled from "styled-components";
import { ReactComponent as ZoomInIcon } from "../../assets/zoom-in-ico.svg";
import { ReactComponent as ZoomOutIcon } from "../../assets/zoom-out-ico.svg";
import { ReactComponent as NormalIcon } from "../../assets/normal-size-ico.svg";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))
    drop-shadow(0 3px 3px rgba(0, 0, 0, 0.25));
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
    transform: scale(1.2);
    animation: buttonBlinkBig 0.2s;
  }
`;

const StyledNormalButton = styled(StyledButton)`
  margin-top: 1rem;
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

export default SizeMenu;
