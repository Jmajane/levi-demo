import "./SizeSelector.css";

const SizeSelector = ({ selectedStyle }) => {
  const waistSizes = selectedStyle.waist.map((size, index) => {
    return (
      <div key={index} className="SingleSize">
        <span>{size}</span>
      </div>
    );
  });
  const lengthSizes = selectedStyle.length.map((size, index) => {
    return (
      <div key={index} className="SingleSize">
        <span>{size}</span>
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
