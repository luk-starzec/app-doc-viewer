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
`;

const StyledButton = styled.a``;

const StyledIcon = styled(SectionIcon)`
  height: 3rem;
  width: 3rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    animation: buttonBlinkBig 0.2s;
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
        <StyledButton href="#link" title="Sznurki">
          <StyledIcon sectionType={SECTION_TYPE_LINK} />
        </StyledButton>
      )}
    </StyledWrapper>
  );
};

export default SubMenu;
