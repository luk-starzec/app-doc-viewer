import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ReactComponent as MainIcon } from "../../assets/main-ico.svg";

const StyledWrapper = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 200;
`;

const StyledIcon = styled(MainIcon)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    animation: buttonBlink 0.2s;
  }
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))
    drop-shadow(0 3px 5px rgba(0, 0, 0, 0.20));
`;

const StyledFrontIcon = styled(StyledIcon)`
  position: absolute;
  top: 0;
  left: 0;
  filter: none;
`;

const HomeButton = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <Link href="/">
        <a title="Strona główna">
          <StyledIcon />
          <StyledFrontIcon />
        </a>
      </Link>
    </StyledWrapper>
  );
};

export default HomeButton;
