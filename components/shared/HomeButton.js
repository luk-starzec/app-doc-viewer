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
    animation: buttonBlinkSmall 0.2s;
  }
`;

const HomeButton = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <Link href="/">
        <a title="Strona główna">
          <StyledIcon />
        </a>
      </Link>
    </StyledWrapper>
  );
};

export default HomeButton;
