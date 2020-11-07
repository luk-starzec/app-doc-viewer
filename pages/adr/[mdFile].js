import React from "react";
import matter from "gray-matter";
import styled from "styled-components";
import FileHeader from "../../components/adr/FileHeader";
import ContentWrapper from "../../components/shared/ContentWrapper";
import { SECTION_TYPE_ADR } from "../../components/shared/SectionIcon";
import FileContent from "../../components/adr/FileContent";
import GetAdrItems from "../../data/AdrData";


const StyledFileHeader = styled(FileHeader)`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

const MdTemplate = ({ fileName, content }) => {
  return (
    <ContentWrapper>
      <StyledFileHeader fileName={fileName} sectionType={SECTION_TYPE_ADR} />
      <FileContent content={content} />
    </ContentWrapper>
  );
};

export async function getStaticPaths() {
  const items = GetAdrItems();
  const paths = items.map(({ url }) => url);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { mdFile: fileName } = context.params;

  const content = await import(`../../public/adr/${fileName}.md`);
  const data = matter(content.default);

  return { props: { fileName, content: data.content } };
}

export default MdTemplate;
