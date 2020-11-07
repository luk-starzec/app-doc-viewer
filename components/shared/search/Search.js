import React, { createRef, useCallback, useEffect, useState } from "react";
import styled, { withTheme } from "styled-components";
import { ReactComponent as SearchIcon } from "../../../assets/search-ico.svg";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const StyledWrapper = styled.div`
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  width: auto;
  position: fixed;
  left: 1rem;
  bottom: 1.5rem;
  z-index: 100;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))
    drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  background-color: ${({ theme }) => theme.search_backgroundColor};
  transition: background-color 0.5s;
`;

const StyledIcon = styled(SearchIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.searchIcon_fill};
  transition: transform 0.2s ease, fill 0.5s;

  &:hover {
    transition: transform 0.2s cubic-bezier(0.18, 0.89, 0.76, 2.8);
    transform: scale(1.2);
  }
`;

const Search = ({ className }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = createRef();
  const [resultItems, setResultItems] = useState([]);

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);

  const onWindowClick = useCallback((event) => {
    if (inputRef.current && !inputRef.current.contains(event.target))
      clearSearch();
  }, []);

  const onButtonClick = useCallback(() => {
    clearSearch();
    setInputVisible(!inputVisible);
  });

  const clearSearch = useCallback(() => {
    setResultItems([]);
    if (inputRef.current) inputRef.current.value = "";
  }, []);

  useEffect(() => {
    if (inputVisible && inputRef.current) inputRef.current.focus();
  }, [inputVisible]);

  return (
    <>
      {resultItems.length > 0 && <SearchResults items={resultItems} />}

      <StyledWrapper className={className}>
        <StyledIcon onClick={onButtonClick} />
        {inputVisible && (
          <SearchInput
            ref={inputRef}
            resultItems={resultItems}
            setResultItems={setResultItems}
          />
        )}
      </StyledWrapper>
    </>
  );
};

export default withTheme(Search);
