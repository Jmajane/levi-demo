import "./PopupWidget.css";
import IntroClip from "../../../IntroClip.mp4";
import LoginState from "./Login/Login";
import { useState } from "react";

const PopupWidget = () => {
  const IntroState = () => {
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
        <button onClick={() => setWidgetState(<LoginState />)}>
          Learn More
        </button>
      </div>
    );
  };

  const [widgetState, setWidgetState] = useState(<IntroState />);

  return <div id="WidgetContainer">{widgetState}</div>;
};

export default PopupWidget;
