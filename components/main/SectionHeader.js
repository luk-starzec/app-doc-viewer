import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SectionIcon, { ALL_SECTION_TYPES } from "../shared/SectionIcon";
import { ReactComponent as ToggleIcon } from "../../assets/toggle-ico.svg";

const StyledSummary = styled.summary`
  background-color: #3c3c3c;
  color: #eeeeee;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  outline: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s;

  &::-webkit-details-marker {
    color: transparent;
  }

  svg {
    transition: transform 0.2s;
  }
  &:hover {
    background-color: #444444;

    svg:not(.toggle) {
      animation: buttonBlinkSmall 0.2s;
    }
  }
`;

const StyledIcon = styled(SectionIcon)`
  width: 2rem;
  height: 2rem;
  margin: 1rem;
`;

const StyledToggle = styled(ToggleIcon)`
  margin: 1rem;
`;

const StyledTitle = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const SectionHeader = ({ title, sectionType, className }) => {
  return (
    <StyledSummary className={className}>
      <StyledIcon sectionType={sectionType} />
      <StyledTitle>{title}</StyledTitle>
      <StyledToggle className="toggle" />
    </StyledSummary>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  sectionType: PropTypes.oneOf(ALL_SECTION_TYPES),
};

export default SectionHeader;
