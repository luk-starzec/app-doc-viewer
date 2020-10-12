import React from "react";
import ReactMarkdown from "react-markdown";
import styled, { css, withTheme } from "styled-components";
import PropTypes from "prop-types";

const StyledFileContent = styled(ReactMarkdown)`
  margin-bottom: 1rem;
  padding: 0.8rem 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.5rem;
  border-radius: 0.5rem;
  -webkit-transition: -webkit-filter 300ms linear;

  background-color: ${({ theme }) => (theme.isDark ? "#1e1e1e" : "#000000")};
  color: #e0e0e0;
  ${({ theme }) =>
    !theme.isDark &&
    css`
      filter: invert(1) hue-rotate(0deg)
        drop-shadow(0 3px 6px rgba(0, 0, 0, 0.16))
        drop-shadow(0 3px 6px rgba(0, 0, 0, 0.23));
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
