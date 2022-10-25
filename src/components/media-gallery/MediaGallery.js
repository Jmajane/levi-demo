import "./MediaGallery.css";

import { useState } from "react";
import JeanTitleRating from "../jean-title-rating/JeanTitleRating";

const MediaGallery = ({ selectedStyle }) => {
  console.log(selectedStyle);
  return (
    <div className="MediaGallery">
      <JeanTitleRating title={selectedStyle.title} />
    </div>
  );
};

export default MediaGallery;
