import "./JeanTitleRating.css"

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

function JeanTitleRating({ jeanColor }) {
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
          color: "black",
        },
      });
  return (
    <div>
        <h3>501 ORIGINAL FIT MEN'S JEANS</h3>
        <StyledRating
        name="star-rating"
        defaultValue={jeanColor.rating}
        precision={0.1}
      />
    </div>
  )
}

export default JeanTitleRating