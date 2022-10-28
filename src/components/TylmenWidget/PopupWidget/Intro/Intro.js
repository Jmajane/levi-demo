import IntroClip from "./IntroClip.mp4";
import "./Intro.css";

const IntroState = ({ updateWidget }) => {
  return (
    <div className="Intro">
      <div className="IntroTitle">
        <h4>Sizing Suggestions that</h4>
        <h4>knows your every Inch.</h4>
      </div>

      <video src={IntroClip} autoPlay loop muted />

      <button onClick={() => updateWidget()}>Learn More</button>
    </div>
  );
};

export default IntroState;
