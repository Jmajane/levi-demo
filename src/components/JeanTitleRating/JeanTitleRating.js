import "./JeanTitleRating.css";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

function JeanTitleRating({ title, rating, votes }) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
  });

  return (
    <div className="JeanTitleRating">
      <h3>{title}</h3>
      <div>
        <StyledRating
          name="star-rating"
          defaultValue={rating}
          precision={0.1}
        />
        <span>{votes}</span>
      </div>
    </div>
  );
}

export default JeanTitleRating;
