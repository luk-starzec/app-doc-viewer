import React from "react";
import styled from "styled-components";
import SectionIcon, {
  SECTION_TYPE_ADR,
  SECTION_TYPE_DIAGRAM,
  SECTION_TYPE_LINK,
} from "../shared/SectionIcon";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))
    drop-shadow(0 3px 3px rgba(0, 0, 0, 0.15));
`;

const StyledButton = styled.a``;

const StyledIcon = styled(SectionIcon)`
  height: clamp(2rem, 10vw, 3rem);
  width: clamp(2rem, 10vw, 3rem);
  
  transition: transform 0.1s ease;
  &:hover {
    transition: transform 0.2s cubic-bezier(0.18, 0.89, 0.76, 4);
    transform: scale(1.1);
  }
`;

const SubMenu = ({ showAdr, showDiagram, showLink, className }) => {
  return (
    <StyledWrapper className={className}>
      {showAdr && (
        <StyledButton href="#adr" title="Decyzje">
          <StyledIcon sectionType={SECTION_TYPE_ADR} />
        </StyledButton>
      )}
      {showDiagram && (
        <StyledButton href="#diagram" title="Diagramy">
          <StyledIcon sectionType={SECTION_TYPE_DIAGRAM} />
        </StyledButton>
      )}
      {showLink && (
        <StyledButton href="#link" title="Linki">
          <StyledIcon sectionType={SECTION_TYPE_LINK} />
        </StyledButton>
      )}
    </StyledWrapper>
  );
};

export default SubMenu;
