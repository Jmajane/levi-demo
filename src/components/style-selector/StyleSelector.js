import "./StyleSelector.css";

import ColorSelector from "./color-selector/ColorSelector";

const StyleSelector = ({ jeanColor, colors, changeSelectedImage }) => {


  const mappedWaist = jeanColor.waist.map((size) => {
    return (
      <div className="SizeContainer">
        <span>{size}</span>
      </div>
    );
  });
  const mappedLength = jeanColor.length.map((size) => {
    return (
      <div className="SizeContainer">
        <span>{size}</span>
      </div>
    );
  });

  return (
    <div className="Jean-Texture" onClick={(e) => changeSelectedImage(e)}>
     
      <ColorSelector colors={colors} jeanColor={jeanColor} />
      
      <h6>Waist</h6>
      <div>{mappedWaist}</div>
      <h6>Length</h6>
      <div>{mappedLength}</div>
    </div>
  );
};

export default StyleSelector;
