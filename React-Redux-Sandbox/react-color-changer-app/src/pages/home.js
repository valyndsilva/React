import React, { useState } from 'react';
import { ColorViewerContainer } from '../containers/colorViewer';
import { SearchInputContainer } from '../containers/searchInput';

export default function Home() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <>
      <ColorViewerContainer
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <SearchInputContainer
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </>
  );
}
