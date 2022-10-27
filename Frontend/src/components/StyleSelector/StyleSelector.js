import "./StyleSelector.css";

import { useState } from 'react'
import { accordionDetailsClasses } from "@mui/material";

const StyleSelector = ({
  styles,
  selectedStyle,
  setSelectedStyle,
  setSelectedPicture,
}) => {
  const updateStyle = (index) => {
    setSelectedStyle(styles[index]);
    setSelectedPicture(styles[index].pictures[0]);
  };
  
  // const [buttonStyle, useButtonStyle] = useState({
  //   buttonOneStyle: { border: "1px solid black" },
  //   buttonTwoStyle: { border: "none" }
  // })

  
  const availableStyles = styles.map(({ jeanColor }, index) => {
    return (
      <div
        key={index}
        className="SingleColor"
        onClick={() => updateStyle(index)}
      >
        <img src={jeanColor} />
      </div>
    
    );
  });
  return (
    <div className="StyleSelector">
      <span>{selectedStyle.name}</span>
      <div className="ColorSelectorWrapper">
        <div className="ColorSelector">{availableStyles}</div>
        
      </div>
    
    </div>
  );
};

export default StyleSelector;
