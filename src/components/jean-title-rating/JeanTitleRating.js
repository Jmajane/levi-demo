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
        defaultValue={jeanColor.styles[0].rating}
        precision={0.1} 
      />
      <p>{jeanColor.styles[0].votes}</p>
    </div>
  )
}

export default JeanTitleRating