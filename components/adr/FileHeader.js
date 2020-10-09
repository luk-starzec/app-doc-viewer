import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SectionIcon, { ALL_SECTION_TYPES } from "../shared/SectionIcon";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.div`
  margin: 0 1rem;
  color: #ffffff;
`;

const StyledFileName = styled.div`
  background-color: #3c3c3c;
  color: #e5e5e5;
  flex-grow: 1;
  height: 2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
`;

const StyledIcon = styled(SectionIcon)`
  height: 2rem;
  width: 2rem;
  margin: 0 1rem;
  align-self: flex-end;
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
export default FileHeader;
