import IntroClip from "./IntroClip.mp4";
import "./Intro.css";

const IntroState = ({ updateWidget }) => {
  return (
    <div id="IntroState">
      <p>Sizing Suggestions that knows your every Inch.</p>
      <video
        src={IntroClip}
        autoPlay
        loop
        muted
        style={{ width: "90%", height: "100%" }}
      />
      <button onClick={() => updateWidget()}>Learn More</button>
    </div>
  );
};

export default IntroState;
