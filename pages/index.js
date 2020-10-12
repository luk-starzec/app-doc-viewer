import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Section from "../components/main/Section";
import SubMenu from "../components/main/SubMenu";
import ContentWrapper from "../components/shared/ContentWrapper";
import {
  SECTION_TYPE_ADR,
  SECTION_TYPE_DIAGRAM,
  SECTION_TYPE_LINK,
} from "../components/shared/SectionIcon";
import GetAdrItems from "../data/AdrData";
import GetDiagramItems from "../data/DiagramData";
import GetLinkItems from "../data/LinkData";
import SearchContext from "../data/SearchContext";

const StyledSection = styled(Section)`
  margin: 20px 0 10px 0;
`;

const StyledSubMenu = styled(SubMenu)`
  position: fixed;
  right: 1rem;
  bottom: 1.5rem;
`;

const Index = ({ adrItems, diagramItems, linkItems }) => {
  const showAdr = adrItems && adrItems.length > 0;
  const showDiagram = diagramItems && diagramItems.length > 0;
  const showLink = linkItems && linkItems.length > 0;
  const { searchData, setSearchData } = useContext(SearchContext);

  useEffect(() => {
    const adr = adrItems.map((item) => ({
      label: item.label,
      url: item.url,
      type: SECTION_TYPE_ADR,
    }));
    const diagram = diagramItems.map((item) => ({
      label: item.label,
      url: item.url,
      type: SECTION_TYPE_DIAGRAM,
    }));
    const data = [...adr, ...diagram];

    setSearchData(data);
  }, []);

  return (
    <ContentWrapper>
      <StyledSubMenu
        showAdr={showAdr}
        showDiagram={showDiagram}
        showLink={showLink}
      />
      {adrItems && (
        <StyledSection
          title="Decyzje"
          sectionType={SECTION_TYPE_ADR}
          items={adrItems}
          id="adr"
        />
      )}
      {diagramItems && (
        <StyledSection
          title="Diagramy"
          sectionType={SECTION_TYPE_DIAGRAM}
          items={diagramItems}
          id="diagram"
        />
      )}
      {linkItems && (
        <StyledSection
          title="Linki"
          sectionType={SECTION_TYPE_LINK}
          items={linkItems}
          id="link"
        />
      )}
    </ContentWrapper>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      adrItems: GetAdrItems(),
      diagramItems: GetDiagramItems(),
      linkItems: GetLinkItems(),
    },
  };
};

export default Index;
