import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

const StyledItem = styled.li`
  list-style: none;
  margin: 0.75rem 0;

  a {
    text-decoration: none;
    &:hover {
      animation: fontBlink 0.2s;

      @keyframes fontBlink {
        50% {
          font-size: 1.02rem;
        }
      }

      .linkText__label {
        color: #ffffff;
      }

      .linkText__comment {
        color: #bbbbbb;
      }
    }
  }
`;

const Item = (props) => {
  return (
    <StyledItem className={props.className}>
      {props.externalUrl && <ExternalLink {...props} />}
      {!props.externalUrl && <InternalLink {...props} />}
    </StyledItem>
  );
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  externalUrl: PropTypes.bool,
  label: PropTypes.string.isRequired,
  comment: PropTypes.string,
};

export default Item;
