import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import LinkText from "./LinkText";

const InternalLink = (props) => {
  return (
    <Link href={props.url}>
      <a>
        <LinkText {...props} />
      </a>
    </Link>
  );
};

InternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  comment: PropTypes.string,
};

export default InternalLink;
