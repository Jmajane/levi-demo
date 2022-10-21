import "./MediaGallery.css";
import PhotoSelector from "./photo-selector/PhotoSelector";
import { useState } from "react";

const MediaGallery = () => {
  const images = [
    {
      href: "https://img.freepik.com/free-photo/closeup-concrete-wall-texture-background_1017-24490.jpg?w=2000",
    },
    {
      href: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png",
    },
    {
      href: "https://media.kohlsimg.com/is/image/kohls/889342_Roadie?wid=600&hei=600&op_sharpen=1",
    },
  ];

  const [slectedImg, setSelectedImg] = useState(images[0].href);

  const changeSelectedImage = (e) => {
    setSelectedImg(images[e.target.id].href);
  };

  return (
    <div className="MediaGallery">
      <div className="SelectedImg">
        <img src={slectedImg} />
      </div>
      <PhotoSelector
        images={images}
        changeSelectedImage={changeSelectedImage}
      />
    </div>
  );
};

export default MediaGallery;
