import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import SectionIcon from "../SectionIcon";

const StyledList = styled.ul`
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;
  width: auto;
  padding: 1rem 0 1.5rem 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.searchTooltip_backgroundColor};
  list-style: none;
  z-index: 99;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))
    drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));

  a {
    text-decoration: none;
  }
`;

const StyledListItem = styled.li`
  cursor: pointer;
  padding-right: 1rem;
  color: #555555;
  line-height: 1.5;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) =>
        theme.searchTooltipItem_backgroundColor_hover};
    `}

  &:hover {
    background-color: ${({ theme }) =>
      theme.searchTooltipItem_backgroundColor_hover};
  }
`;

const StyledItemIcon = styled(SectionIcon)`
  width: 1.1rem;
  height: 1.1rem;
  margin: 0 1rem;
  opacity: 0.6;
  vertical-align: middle;
`;

const SearchResults = ({ items }) => {
  return (
    <StyledList>
      {items.map(({ label, url, type, isSelected }, i) => (
        <Link href={url} key={i}>
          <a>
            <StyledListItem isSelected={isSelected}>
              <StyledItemIcon sectionType={type} />
              {label}
            </StyledListItem>
          </a>
        </Link>
      ))}
    </StyledList>
  );
};

export default SearchResults;
