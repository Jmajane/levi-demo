import "./ColorSelector.css";

function ColorSelector({ colors, jeanColor }) {
  

  const availableColors = colors.map(({ href, colorStyle }, index) => {
    if (index < 7) {
      return (
        <div key={index} className="ColorDiv">
          <img src={href} 

          />
        </div>
      );
    }
  });
  return (
    <div>
      <p>{jeanColor.colorStyle}</p>
      <div className="ColorContainer">{availableColors}</div>
    </div>
  );
}

export default ColorSelector;
