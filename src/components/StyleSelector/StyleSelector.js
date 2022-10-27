import "./StyleSelector.css";

import { useState } from "react";
import { accordionDetailsClasses } from "@mui/material";
import { border } from "@mui/system";

const StyleSelector = ({
  styles,
  selectedStyle,
  setSelectedStyle,
  setSelectedPicture,
}) => {
  const updateStyle = (e, index) => {
    setSelectedStyle(styles[index]);
    setSelectedPicture(styles[index].pictures[0]);
    console.log(e.currentTarget);
    e.currentTarget.style = "border: 2px solid black";
  };

  const availableStyles = styles.map(({ jeanColor }, index) => {
    return (
      <div
        key={index}
        className="SingleColor"
        onClick={(e) => updateStyle(e, index)}
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
