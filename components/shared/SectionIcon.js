import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as AdrIcon } from "../../assets/adr-ico.svg";
import { ReactComponent as DiagramIcon } from "../../assets/diagram-ico.svg";
import { ReactComponent as LinkIcon } from "../../assets/link-ico.svg";
import { ReactComponent as NoIcon } from "../../assets/no-ico.svg";

export const SECTION_TYPE_ADR = "ADR";
export const SECTION_TYPE_DIAGRAM = "DIAGRAM";
export const SECTION_TYPE_LINK = "LINK";
export const ALL_SECTION_TYPES = [
  SECTION_TYPE_ADR,
  SECTION_TYPE_DIAGRAM,
  SECTION_TYPE_LINK,
];

const SectionIcon = ({ sectionType, className }) => {
  switch (sectionType) {
    case SECTION_TYPE_ADR:
      return <AdrIcon className={className} />;

    case SECTION_TYPE_DIAGRAM:
      return <DiagramIcon className={className} />;

    case SECTION_TYPE_LINK:
      return <LinkIcon className={className} />;

    default:
      return <NoIcon className={className}/>;
  }
};

SectionIcon.propTypes = {
  sectionType: PropTypes.oneOf(ALL_SECTION_TYPES),
};

export default SectionIcon;
