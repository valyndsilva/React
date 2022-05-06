import React from 'react';
import SearchInput from '../components/searchInput';
import colorNames from 'colornames';

export function SearchInputContainer({
  colorValue,
  setColorValue,
  setHexValue,
  setIsDarkText,
  isDarkText,
}) {
  return (
    <SearchInput className="searchInput" onSubmit={(e) => e.PreventDefault()}>
      <SearchInput.Label>Add Color Name:</SearchInput.Label>
      <SearchInput.Input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <SearchInput.Button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </SearchInput.Button>
    </SearchInput>
  );
}
