import "./SizeSelector.css";
import { useState } from "react"


const SizeSelector = ({ selectedStyle }) => {
  const [active, setActive] = useState(null)
  const [secondActive, setSecondActive] = useState()


  const waistSizes = selectedStyle.waist.map((size, index) => {
    return (
      <div className="container">
        <button key={index} className="SingleSize">
          <span onClick={() => setActive(size)}
          className={`size ${active == size && 'active'}`}
          >{size}</span>
        </button>
      </div>
    );
  });


  const lengthSizes = selectedStyle.length.map((size, index) => {
    return (
      <div className="container">
        <button key={index} className="SingleSize">
          <span onClick={() => setSecondActive(size)}
          className={`size ${secondActive == size && 'active'}`}
          >{size}</span>
        </button>
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
