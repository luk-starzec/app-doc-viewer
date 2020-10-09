import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search-ico.svg";

const StyledWrapper = styled.div`
  background-color: #e1e1e1;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  width: auto;
  position: fixed;
  left: 1rem;
  bottom: 1.5rem;
  z-index: 100;
`;

const StyledIcon = styled(SearchIcon)`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    animation: buttonBlinkBig 0.2s;
  }
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  flex-grow: 1;
  padding: 0 10px;
  min-width: 140px;
  width: calc((100vw - 1000px - 145px) / 2);
`;

const Search = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledWrapper className={className}>
      <StyledIcon onClick={() => setCollapsed(!collapsed)} />
      {!collapsed && <StyledInput type="text" />}
    </StyledWrapper>
  );
};

export default Search;
