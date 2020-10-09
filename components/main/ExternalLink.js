import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as ExternalLinkIcon } from "../../assets/external-link-ico.svg";
import LinkText from "./LinkText";

const StyledExternalLinkIcon = styled(ExternalLinkIcon)`
  margin-left: 0.4rem;
  height: 1rem;
  width: 1rem;
`;

const ExternalLink = (props) => {
  return (
    <a href={props.url} target="_blank">
      <LinkText {...props} />
      <StyledExternalLinkIcon />
    </a>
  );
};

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  comment: PropTypes.string,
};

export default ExternalLink;
