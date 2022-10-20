import "./PhotoSelector.css";

const PhotoSelector = ({ images, changeSelectedImage }) => {
  const display = images.map(({ href }, index) => {
    return (
      <div
        key={index}
        className="ImgContainer"
        onClick={(e) => changeSelectedImage(e)}
      >
        <img id={index} src={href} />
      </div>
    );
  });

  return <div className="PhotoSelector">{display}</div>;
};

export default PhotoSelector;
