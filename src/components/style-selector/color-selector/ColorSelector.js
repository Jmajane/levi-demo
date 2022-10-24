import "./ColorSelector.css";

function ColorSelector({ colors, jeanColor }) {
  

  const availableColors = colors.map(({ jeanColor, name }, index) => {
    if (index < 7) {
      return (
        <div key={index} className="ColorDiv">
          <img src={jeanColor} 

          />
        </div>
      );
    }
  });
  return (
    <div>
      <p>{jeanColor.styles[0].name}</p>
      <div className="ColorContainer">{availableColors}</div>
    </div>
  );
}

export default ColorSelector;
