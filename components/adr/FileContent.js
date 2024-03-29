import React from "react";
import ReactMarkdown from "react-markdown";
import styled, { css, withTheme } from "styled-components";
import PropTypes from "prop-types";

const StyledFileContent = styled(ReactMarkdown)`
  margin-bottom: 1rem;
  padding: clamp(0px, 1%, 0.8rem) clamp(10px, 5%, 2rem);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.5rem;
  border-radius: 0.5rem;
  -webkit-transition: -webkit-filter 300ms linear;
  transition: -webkit-filter 300ms linear;

  background-color: ${({ theme }) => (theme.isDark ? "#1e1e1e" : "#000000")};
  border: solid 1px ${({ theme }) => theme.adrContent_borderColor};
  color: #e0e0e0;
  ${({ theme }) =>
    !theme.isDark &&
    css`
      filter: invert(1) hue-rotate(0deg);
    `}

  h2 {
    color: #ce915b;
  }
  h3 {
    color: #dcdcaa;
  }
  a {
    color: #0094ff;
  }
`;

const FileContent = ({ content, className }) => {
  return <StyledFileContent source={content} className={className} />;
};

FileContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default withTheme(FileContent);
