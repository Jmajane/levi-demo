import "./StyleSelector.css";

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
      <div className="ColorWrapper">{availableStyles}</div>
    </div>
  );
};

export default StyleSelector;
