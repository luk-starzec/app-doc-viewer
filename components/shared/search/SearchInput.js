import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: #000000;
  font-weight: 300;
  flex-grow: 1;
  padding: 0 10px;
  min-width: 140px;
  max-width: 300px;
  width: calc((100vw - 1000px - 145px) / 2);
`;

const SearchInput = React.forwardRef((props, ref) => {
  const { resultItems, setResultItems } = props;
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const searchEndpoint = (query) => `/api/search?text=${query}`;

  const onChange = useCallback((event) => {
    const text = event.target.value;
    setSearchText(text);

    fetch(searchEndpoint(text))
      .then((res) => res.json())
      .then((res) => setResultItems(res.results));
  }, []);

  const onKeyDown = (event) => {
    const { key } = event;

    switch (key) {
      case "ArrowUp":
      case "ArrowDown":
        const direction = key === "ArrowDown" ? 1 : -1;

        const currentIndex = resultItems.findIndex(
          ({ isSelected }) => isSelected
        );

        let index = currentIndex + direction;
        if (index < 0) index = resultItems.length - 1;
        if (index >= resultItems.length) index = 0;

        const items = resultItems.map((item, i) => ({
          ...item,
          isSelected: i == index,
        }));
        setResultItems(items);

        event.preventDefault();
        break;
      case "Enter":
        const item = resultItems.find(({ isSelected }) => isSelected);

        if (item) {
          router.push(item.url);
          clearSearch();
        }
        break;
      case "Escape":
        clearSearch();
        break;
    }
  };

  const clearSearch = useCallback(() => {
    setResultItems([]);
    setSearchText("");
  }, []);

  return (
    <StyledInput
      type="text"
      ref={ref}
      placeholder="szukaj..."
      value={searchText}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
});

export default SearchInput;
