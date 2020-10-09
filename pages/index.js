import React from "react";
import styled from "styled-components";
import fs from "fs";
import Section from "../components/main/Section";
import SubMenu from "../components/main/SubMenu";
import ContentWrapper from "../components/shared/ContentWrapper";
import SectionIcon, {
  SECTION_TYPE_ADR,
  SECTION_TYPE_DIAGRAM,
  SECTION_TYPE_LINK,
} from "../components/shared/SectionIcon";

const StyledWrapper = styled.div``;

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
          title="Sznurki"
          sectionType={SECTION_TYPE_LINK}
          items={linkItems}
          id="link"
        />
      )}
    </ContentWrapper>
  );
};

export const getStaticProps = async () => {
  const adrFiles = fs.readdirSync("public/adr");
  const adrNames = adrFiles.map((file) => file.replace(".md", ""));
  const adrLinks = adrNames.map((name) => ({
    url: `/adr/${name}`,
    label: name.replace(/-/g, " "),
  }));

  const diagramFiles = fs.readdirSync("public/diagram");
  const xx = fs.ex;
  const diagramLinks = diagramFiles.map((name) => ({
    url: `/diagram/${name.replace(/\./g, "-")}`,
    label: `${name.replace(/-/g, " ").split(".").shift()}`,
    comment: `[${name.replace(/-/g, " ").split(".").pop()}]`,
  }));

  //console.log(adrLinks);

  const links = [
    { url: "aaa1", label: "aa 1" },
    { url: "http://localhost:3000", label: "GIT:", comment: "http://localhost:3000", externalUrl: true },
    { url: "aaa3", label: "aa 3" },
    { url: "aaa4", label: "Jakaś strona", comment: "http://test.pl" },
    { url: "aaa1", label: "aa 1" },
    { url: "aaa2", label: "aa 2" },
    { url: "aaa3", label: "aa 3" },
    { url: "aaa4", label: "aa 4" },
    { url: "aaa1", label: "aa 1" },
    { url: "aaa2", label: "aa 2" },
    { url: "aaa3", label: "aa 3" },
    { url: "aaa4", label: "aa 4" },
  ];

  return {
    props: {
      adrItems: adrLinks,
      diagramItems: diagramLinks,
      linkItems: links,
    },
  };
};

export default Index;
