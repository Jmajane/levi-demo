import "./StyleSelector.css";

const StyleSelector = ({ styles }) => {
  const availableStyles = styles.map(({ jeanColor }) => {
    console.log(jeanColor);
    return (
      <div>
        <img src={jeanColor} />
      </div>
    );
  });
  return <div className="StyleSelector">{availableStyles}</div>;
};

export default StyleSelector;
