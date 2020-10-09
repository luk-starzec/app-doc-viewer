import React, { useState } from "react";
import styled from "styled-components";
import FileHeader from "../../components/adr/FileHeader";
import SizeMenu from "../../components/diagram/SizeMenu";
import ContentWrapper from "../../components/shared/ContentWrapper";
import { SECTION_TYPE_DIAGRAM } from "../../components/shared/SectionIcon";

const StyledFileHeader = styled(FileHeader)`
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  max-width: 1000px;
`;

const StyledImageWrapper = styled.div`
  margin: 0 6rem;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  margin: 0 auto;
  transform-origin: top;
  transform: scale(${({ zoom }) => zoom});
  transition: transform 0.3s;
`;

const StyledSizeMenu = styled(SizeMenu)`
  position: fixed;
  right: 1rem;
  bottom: 1.5rem;
`;

const ImageTemplate = ({ fileName, filePath }) => {
  const [zoom, setZoom] = useState(1);
  const minZoom = 0.2;
  const maxZoom = 2;
  const step = 0.2;

  const fnZoomIn = () => {
    zoom + step < maxZoom ? setZoom(zoom + step) : maxZoom;
  };
  const fnZoomOut = () => {
    zoom - step > minZoom ? setZoom(zoom - step) : minZoom;
  };
  const fnZoomNormal = () => setZoom(1);

  return (
    <>
      <ContentWrapper>
        <StyledFileHeader
          fileName={fileName}
          sectionType={SECTION_TYPE_DIAGRAM}
        />
      </ContentWrapper>
      <StyledImageWrapper>
        <StyledImage src={filePath} zoom={zoom} />
      </StyledImageWrapper>
      <StyledSizeMenu
        zoomIn={fnZoomIn}
        zoomOut={fnZoomOut}
        zoomNormal={fnZoomNormal}
      />
    </>
  );
};

ImageTemplate.getInitialProps = async (context) => {
  const { imageFile } = context.query;

  const i = imageFile.lastIndexOf("-");
  const name = imageFile.substr(0, i);
  const ext = imageFile.substr(i + 1);

  const fileName = `${name}.${ext}`;
  const filePath = `/diagram/${fileName}`;

  return { fileName, filePath };
};

export default ImageTemplate;
