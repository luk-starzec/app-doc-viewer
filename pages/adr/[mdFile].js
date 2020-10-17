import React from "react";
import matter from "gray-matter";
import styled from "styled-components";
import FileHeader from "../../components/adr/FileHeader";
import ContentWrapper from "../../components/shared/ContentWrapper";
import { SECTION_TYPE_ADR } from "../../components/shared/SectionIcon";
import FileContent from "../../components/adr/FileContent";

const StyledFileHeader = styled(FileHeader)`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  max-width: 1000px;
`;

const MdTemplate = ({ fileName, content }) => {
  return (
    <ContentWrapper>
      <StyledFileHeader fileName={fileName} sectionType={SECTION_TYPE_ADR} />
      <FileContent content={content} />
    </ContentWrapper>
  );
};

MdTemplate.getInitialProps = async (context) => {
  const { mdFile: fileName } = context.query;

  const content = await import(`../../public/adr/${fileName}.md`);
  const data = matter(content.default);

  return { fileName, ...data };
};

export default MdTemplate;
