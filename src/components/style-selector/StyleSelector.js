import "./StyleSelector.css";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import ColorSelector from "./color-selector/ColorSelector";

const StyleSelector = ({ jeanColor, colors, changeSelectedImage }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
  });

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
      <h3>501 ORIGINAL FIT MEN'S JEANS</h3>
      <StyledRating
        name="star-rating"
        defaultValue={jeanColor.rating}
        precision={0.1}
      />
      <p>{jeanColor.votes}</p>
      <h2>{jeanColor.price}</h2>
      <ColorSelector colors={colors} jeanColor={jeanColor} />
      <p className="Grey-out">Or 4 installments of $19.88</p>
      <p className="Deal">2 for $99. Applied at Checkout</p>
      <p>{jeanColor.colorStyle}</p>
      <h6>Waist</h6>
      <div>{mappedWaist}</div>
      <h6>Length</h6>
      <div>{mappedLength}</div>
    </div>
  );
};

export default StyleSelector;
