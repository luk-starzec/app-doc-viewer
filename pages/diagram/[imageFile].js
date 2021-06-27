import React, { useRef, useState } from "react";
import styled from "styled-components";
import FileHeader from "../../components/adr/FileHeader";
import DrawArea from "../../components/diagram/DrawArea";
import DrawMenu from "../../components/diagram/DrawMenu";
import SizeMenu from "../../components/diagram/SizeMenu";
import ContentWrapper from "../../components/shared/ContentWrapper";
import { SECTION_TYPE_DIAGRAM } from "../../components/shared/SectionIcon";
import GetDiagramItems from "../../data/DiagramData";

const StyledFileHeader = styled(FileHeader)`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  max-width: 1000px;
`;

const StyledDrawArea = styled(DrawArea)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  stroke-width: 3px;

  transform-origin: top;
  transition: transform 0.3s;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  margin: 0 6rem;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  margin: 0 auto;
  transform-origin: top;
  transform: scale(${({ zoom }) => zoom});
  transition: transform 0.3s;
  width: 100%;
`;

const StyledSizeMenu = styled(SizeMenu)`
  position: fixed;
  right: clamp(0.5rem, 2vw, 1rem);
  bottom: 1.5rem;
`;

const StyledDrawMenu = styled(DrawMenu)`
  position: fixed;
  right: clamp(0.5rem, 2vw, 1rem);
  top: 8rem;
  z-index: 100;
`;

const ImageTemplate = ({ fileName, filePath }) => {
  const [drawColor, setDrawColor] = useState("#EB144C");
  const [lines, setLines] = useState([]);

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

  const fnClear = () => setLines([]);

  return (
    <>
      <ContentWrapper>
        <StyledFileHeader
          fileName={fileName}
          sectionType={SECTION_TYPE_DIAGRAM}
        />
      </ContentWrapper>

      <StyledImageWrapper>
        <StyledDrawArea
          color={drawColor}
          lines={lines}
          setLines={setLines}
          zoom={zoom}
        />
        <StyledImage src={filePath} zoom={zoom} />
      </StyledImageWrapper>

      <StyledDrawMenu
        drawColor={drawColor}
        setDrawColor={setDrawColor}
        clear={fnClear}
      />

      <StyledSizeMenu
        zoomIn={fnZoomIn}
        zoomOut={fnZoomOut}
        zoomNormal={fnZoomNormal}
      />
    </>
  );
};

export async function getStaticPaths() {
  const items = GetDiagramItems();
  const paths = items.map(({ url }) => url);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { imageFile } = context.params;

  const i = imageFile.lastIndexOf("-");
  const name = imageFile.substr(0, i);
  const ext = imageFile.substr(i + 1);

  const fileName = `${name}.${ext}`;
  const filePath = `/diagram/${fileName}`;

  return { props: { fileName, filePath } };
}

export default ImageTemplate;
