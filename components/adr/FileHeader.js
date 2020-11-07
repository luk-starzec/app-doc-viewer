import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import SectionIcon, { ALL_SECTION_TYPES } from "../shared/SectionIcon";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.adrFileHeaderWrapper_backgroundColor};
  padding: 1.2rem;
  padding-right: 0;
  border-radius: 0.5rem;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
  @media (max-width: 35rem) {
    padding: 0;
  }
`;

const StyledLabel = styled.div`
  margin: 0 1rem;
  color: ${({ theme }) => theme.adrFileHeaderLabel_color};
  transition: color 0.5s;
`;

const StyledFileName = styled.div`
  flex-grow: 1;
  min-height: 2rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.adrFileHeader_backgroundColor};
  color: ${({ theme }) => theme.adrFileHeader_color};
  transition: background-color 0.5s, color 0.5s;
`;

const StyledIcon = styled(SectionIcon)`
  height: 2rem;
  width: 2rem;
  margin: 0 1rem;
  flex-shrink: 0;

  @media (max-width: 35rem) {
    display: none;
  }
`;

const FileHeader = ({ fileName, sectionType, className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledLabel>Plik:</StyledLabel>
      <StyledFileName>{fileName}</StyledFileName>
      <StyledIcon sectionType={sectionType} />
    </StyledWrapper>
  );
};

FileHeader.propTypes = {
  fileName: PropTypes.string.isRequired,
  sectionType: PropTypes.oneOf(ALL_SECTION_TYPES),
};

export default withTheme(FileHeader);
