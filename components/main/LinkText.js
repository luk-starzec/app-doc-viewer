import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledItemLabel = styled.span`
  color: #e0e0e0;
`;

const StyledItemComment = styled.span`
  color: #999999;
`;

const LinkText = ({ label, comment }) => {
  return (
    <>
      <StyledItemLabel className="linkText__label">{label}</StyledItemLabel>
      {comment && (
        <StyledItemComment className="linkText__comment">
          {" "}
          {comment}
        </StyledItemComment>
      )}
    </>
  );
};

LinkText.propTypes = {
  label: PropTypes.string.isRequired,
  comment: PropTypes.string,
};

export default LinkText;
