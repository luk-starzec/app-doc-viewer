import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ReactComponent as MainIcon } from "../../assets/main-ico.svg";

const StyledWrapper = styled.div`
  position: fixed;
  top: 1rem;
  left: clamp(0.5rem, 2vw, 1rem);
  z-index: 200;

  @media (max-width: 500px) {
  }
`;

const StyledIcon = styled(MainIcon)`
  width: clamp(2rem, 10vw, 4rem);
  height: clamp(2rem, 10vw, 4rem);

  transition: transform 0.2s ease;
  &:hover {
    transition: transform 0.2s cubic-bezier(0.38, 0.54, 0.76, 3);
    transform: scale(1.1);
  }

  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))
    drop-shadow(0 3px 5px rgba(0, 0, 0, 0.2));
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
