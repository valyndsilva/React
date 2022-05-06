import React from 'react';
import ColorViewer from '../components/colorViewer';

export function ColorViewerContainer({ colorValue, hexValue, isDarkText }) {
  return (
    <ColorViewer
      className="colorViewer"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#FFF',
      }}
    >
      <ColorViewer.Text>
        {colorValue ? colorValue : 'Enter Color Value'}
      </ColorViewer.Text>
      <ColorViewer.Text>{hexValue ? hexValue : null}</ColorViewer.Text>
    </ColorViewer>
  );
}
ColorViewerContainer.defaultProps = {
  colorValue: 'Empty Color Value',
};
