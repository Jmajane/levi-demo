import "./MediaGallery.css";

import { useState } from "react";
import JeanTitleRating from "../JeanTitleRating/JeanTitleRating";

const MediaGallery = ({
  jeanData,
  selectedStyle,
  selectedPicture,
  setSelectedPicture,
}) => {
  const pictures = selectedStyle.pictures.map((picture, index) => {
    return (
      <div
        className="ImageWrapper"
        key={index}
        onClick={() => setSelectedPicture(selectedStyle.pictures[index])}
      >
        <img src={picture} style={{}} />
      </div>
    );
  });

  return (
    <div className="MediaGallery">
      <JeanTitleRating
        title={jeanData.title}
        rating={selectedStyle.rating}
        votes={selectedStyle.votes}
      />
      <div className="SelectedPicture">
        <img src={selectedPicture} />
      </div>
      <div className="PictureSelectorWrapper">
        <div className="PictureSelector">{pictures}</div>
      </div>
    </div>
  );
};

export default MediaGallery;
