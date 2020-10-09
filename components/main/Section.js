import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";

const StyledWrapper = styled.details`
  background-color: #252525;
  border: #333333 solid thin;
  border-radius: 0.5rem;

  summary .toggle {
    transform: rotate(90deg);
  }
  &[open] summary {
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
    .toggle {
      transform: rotate(0deg);
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

export default Section;
