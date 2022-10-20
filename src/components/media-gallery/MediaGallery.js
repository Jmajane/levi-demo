import "./MediaGallery.css";
import PhotoSelector from "./photo-selector/PhotoSelector";
import { useState } from "react";

const MediaGallery = () => {
  const images = [
    {
      href: "https://media.kohlsimg.com/is/image/kohls/889342_Roadie?wid=600&hei=600&op_sharpen=1",
    },
    {
      href: "https://media.kohlsimg.com/is/image/kohls/889342_Roadie?wid=600&hei=600&op_sharpen=1",
    },
    {
      href: "https://media.kohlsimg.com/is/image/kohls/889342_Roadie?wid=600&hei=600&op_sharpen=1",
    },
  ];

  const [slectedImg, setSelectedImg] = useState(images[0].href);

  return (
    <div className="MediaGallery">
      <div className="SelectedImg">
        <img src={slectedImg} />
      </div>
      <PhotoSelector images={images} setSelectedImg={setSelectedImg} />
    </div>
  );
};

export default MediaGallery;
