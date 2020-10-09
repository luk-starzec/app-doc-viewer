import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import FileHeader from "../../components/adr/FileHeader";
import ContentWrapper from "../../components/shared/ContentWrapper";
import { SECTION_TYPE_ADR } from "../../components/shared/SectionIcon";

const StyledFileHeader = styled(FileHeader)`
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  max-width: 1000px;
`;

const StyledFileContent = styled(ReactMarkdown)`
  background-color: #1e1e1e;
  color: #e0e0e0;
  padding: 0.8rem 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.5rem;
  border-radius: 0.5rem;

  h2 {
    color: #CE915B;
  }
  h3{
    color:  #DCDCAA;
  }
  a {
    color: #0094ff;
  }
`;

const MdTemplate = ({ fileName, content }) => {
  return (
    <>
      <ContentWrapper>
        <StyledFileHeader fileName={fileName} sectionType={SECTION_TYPE_ADR} />
        <StyledFileContent source={content} />
      </ContentWrapper>
    </>
  );
};

MdTemplate.getInitialProps = async (context) => {
  const { mdFile: fileName } = context.query;

  const content = await import(`../../public/adr/${fileName}.md`);
  const data = matter(content.default);

  return { fileName, ...data };
};

export default MdTemplate;
