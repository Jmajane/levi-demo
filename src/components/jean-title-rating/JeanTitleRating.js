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
    <div>
      <h3>{title}</h3>
      <StyledRating name="star-rating" defaultValue={rating} precision={0.1} />
      <p>{votes}</p>
    </div>
  );
}

export default JeanTitleRating;
