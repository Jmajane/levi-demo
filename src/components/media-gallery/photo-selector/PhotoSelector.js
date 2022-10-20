import "./PhotoSelector.css";

const PhotoSelector = ({ images }) => {
  const display = images.map(({ href }, index) => {
    return (
      <div className="ImgContainer">
        <img src={href} />
      </div>
    );
  });

  return <div className="PhotoSelector">{display}</div>;
};

export default PhotoSelector;
