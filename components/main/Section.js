import React from "react";
import styled, { css, withTheme } from "styled-components";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";

const StyledWrapper = styled.details`
  background-color: ${({ theme }) => theme.section_backgroundColor};
  border: solid thin;
  border-color: ${({ theme }) => theme.body};
  transition: background-color 0.5s, border-color 0.5s;
  border-radius: 0.5rem;

  ${({ theme }) =>
    !theme.isDark &&
    css`
      border-color: ${({ theme }) => theme.sectionHeader_backgroundColor};
    `}

  summary .toggle {
    transform: rotate(0deg);
  }

  &[open] summary {
    border-radius: 0.5rem 0.5rem 0 0;

    .toggle {
      transform: rotate(180deg);
    }

    ~ * {
      animation: sweep 0.3s;
    }

    @keyframes sweep {
      from {
        opacity: 0;
        transform: translateY(-1em);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const Section = ({ title, sectionType, items, id, className }) => {
  return (
    <StyledWrapper className={className} id={id} open>
      <SectionHeader title={title} sectionType={sectionType} />
      <SectionContent items={items} sectionType={sectionType} />
    </StyledWrapper>
  );
};

export default withTheme(Section);
