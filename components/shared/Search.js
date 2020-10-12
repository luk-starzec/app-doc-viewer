import Link from "next/link";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { withTheme } from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search-ico.svg";
import SectionIcon, {
  SECTION_TYPE_ADR,
  SECTION_TYPE_DIAGRAM,
  SECTION_TYPE_LINK,
} from "./SectionIcon";
import SearchContext from "../../data/SearchContext";

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
  transition: transform 0.2s, fill 0.5s;

  &:hover {
    transform: scale(1.2);
    animation: buttonBlinkBig 0.2s;
  }
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  color: #000000;
  font-weight: 300;
  flex-grow: 1;
  padding: 0 10px;
  min-width: 140px;
  width: calc((100vw - 1000px - 145px) / 2);
`;

const StyledList = styled.ul`
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;
  width: auto;
  padding: 1rem 0 1.5rem 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.searchTooltip_backgroundColor};
  list-style: none;
  z-index: 99;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))
    drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));

  a {
    text-decoration: none;
  }
`;

const StyledListItem = styled.li`
  cursor: pointer;
  padding-right: 1rem;
  color: #555555;

  &:hover {
    background-color: ${({ theme }) =>
      theme.searchTooltipItem_backgroundColor_hover};
  }
`;

const StyledItemIcon = styled(SectionIcon)`
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
  opacity: 0.6;
`;

const Search = ({ className }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [results, setResults] = useState([]);
  const { searchData } = useContext(SearchContext);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (inputVisible && inputRef.current) inputRef.current.focus();
  }, [inputVisible]);

  const onButtonClick = useCallback((event) => {
    clearResults();
    setInputVisible(!inputVisible);
  });

  const clearResults = useCallback(() => {
    setTooltipVisible(false);
    setResults([]);
    setSearchText("");
  }, []);

  const onChange = useCallback(
    (event) => {
      const text = event.target.value;
      setSearchText(text);
      setResults(
        text.length > 0
          ? searchData.filter((item) => item.label.includes(text))
          : []
      );
    },
    [searchData]
  );

  const onClick = useCallback((event) => {
    if (inputRef.current && !inputRef.current.contains(event.target))
      clearResults();
  }, []);

  const onFocus = useCallback(() => {
    setTooltipVisible(true);
  }, []);

  return (
    <>
      {tooltipVisible && results.length > 0 && (
        <StyledList>
          {results.map((item, i) => (
            <Link href={item.url} key={i}>
              <a>
                <StyledListItem>
                  <StyledItemIcon sectionType={item.type} />
                  {item.label}
                </StyledListItem>
              </a>
            </Link>
          ))}
        </StyledList>
      )}
      <StyledWrapper className={className}>
        <StyledIcon onClick={onButtonClick} />
        {inputVisible && (
          <StyledInput
            type="text"
            ref={inputRef}
            placeholder="szukaj..."
            value={searchText}
            onChange={onChange}
            onFocus={onFocus}
          />
        )}
      </StyledWrapper>
    </>
  );
};

export default withTheme(Search);
