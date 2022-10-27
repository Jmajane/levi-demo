import "./SizeSelector.css";
import { useState } from "react"


const SizeSelector = ({ selectedStyle }) => {
  const [active, setActive] = useState(null)
  const [secondActive, setSecondActive] = useState()


  const waistSizes = selectedStyle.waist.map((size, index) => {
    return (
      <div className="container">
        <div key={index} onClick={() => setActive(size)}
          className={`size ${active == size && 'active'}`}>
          <span>{size}</span>
        </div>
      </div>
    );
  });


  const lengthSizes = selectedStyle.length.map((size, index) => {
    return (
      <div className="container">
        <div key={index} onClick={() => setSecondActive(size)}
          className={`size ${secondActive == size && 'active'}`}>
          <span>{size}</span>
        </div>
      </div>
    );
  });
  
  return (
    <div className="SizeSelector">
      <h5>Select Size</h5>
      <h6>Waist</h6>
      <div className="SizeWrapper">
        <div className="Sizes">{waistSizes}</div>
      </div>
      <h6>Length</h6>
      <div className="SizeWrapper">
        <div className="Sizes">{lengthSizes}</div>
      </div>
    </div>
  );
};

export default SizeSelector;
