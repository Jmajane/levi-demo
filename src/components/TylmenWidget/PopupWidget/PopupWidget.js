import "./PopupWidget.css";
import LoginState from "./Login/Login";
import IntroState from "./Intro/Intro";
import { useState } from "react";

const PopupWidget = () => {
  const updateWidget = () => {
    setWidgetState(<LoginState />);
  };
  const [widgetState, setWidgetState] = useState(
    <IntroState updateWidget={updateWidget} />
  );

  return <div id="WidgetContainer">{widgetState}</div>;
};

export default PopupWidget;
