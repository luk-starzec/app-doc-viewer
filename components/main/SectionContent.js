import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Item from "./Item";
import { ALL_SECTION_TYPES } from "../shared/SectionIcon";

const StyledList = styled.ul`
  margin: 1.5rem 4rem;
  padding: 0;
`;

const SectionContent = ({ items, sectionType, className }) => {
  return (
    <StyledList className={className}>
      {items.map((item, i) => (
        <Item {...item} key={`${sectionType}${i}`} />
      ))}
    </StyledList>
  );
};

SectionContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      externalUrl: PropTypes.bool,
      label: PropTypes.string.isRequired,
      comment: PropTypes.string,
    })
  ),
  sectionType: PropTypes.oneOf(ALL_SECTION_TYPES),
};

export default SectionContent;
