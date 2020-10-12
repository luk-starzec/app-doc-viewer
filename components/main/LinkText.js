import React from "react";
import PropTypes from "prop-types";

const LinkText = ({ label, comment }) => {
  return (
    <>
      <span className="linkText__label">{label}</span>
      {comment && (
        <span className="linkText__comment">
          {" "}
          {comment}
        </span>
      )}
    </>
  );
};

LinkText.propTypes = {
  label: PropTypes.string.isRequired,
  comment: PropTypes.string,
};

export default LinkText;
