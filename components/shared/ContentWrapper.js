import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 0 5rem 0 6rem;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const ContentWrapper = ({ className, children }) => {
  return (
    <StyledWrapper className={className}>
      <StyledContainer>{children}</StyledContainer>{" "}
    </StyledWrapper>
  );
};

export default ContentWrapper;
