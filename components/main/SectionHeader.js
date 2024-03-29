import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import SectionIcon, { ALL_SECTION_TYPES } from "../shared/SectionIcon";
import { ReactComponent as ToggleIcon } from "../../assets/toggle-ico.svg";

const StyledSummary = styled.summary`
  background-color: ${({ theme }) => theme.sectionHeader_backgroundColor};
  color: ${({ theme }) => theme.sectionHeader_color};
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
    transition: transform 0.1s ease;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.sectionHeader_backgroundColor_hover};

    svg:not(.toggle) {
      transition: transform 0.2s cubic-bezier(0.18, 0.89, 0.76, 4);
      transform: scale(1.1);
    }
  }
`;

const StyledIcon = styled(SectionIcon)`
  width: 2rem;
  height: 2rem;
  margin: 1rem;

  @media (max-width: 25rem) {
    display: none;
  }
`;

const StyledToggle = styled(ToggleIcon)`
  margin: 1rem;
  stroke: ${({ theme }) => theme.sectionHeader_toggle_color};
`;

const StyledTitle = styled.div`
  flex-grow: 1;
  text-align: center;

  @media (max-width: 25rem) {
    text-align: left;
    padding-left: 1rem;
  }
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

export default withTheme(SectionHeader);
