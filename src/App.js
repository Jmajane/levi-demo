import "./App.css";

import { useState } from "react";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";
import MediaGallery from "./components/MediaGallery/MediaGallery";

import jeanData from "./jeanData";
import StyleSelector from "./components/StyleSelector/StyleSelector";

function App() {
  const [selectedStyle, setSelectedStyle] = useState(jeanData.styles[1]);

  return (
    <div className="App">
      <Nav />
      <MobileNav />
      {/* <JeanTitleRating jeanColor={selectedJean} />
      <JeanPrice jeanColor={selectedJean} />
      <JeanSelector jeanColor={selectedJean} colors={jeanData} /> */}
      <MediaGallery jeanData={jeanData} selectedStyle={selectedStyle} />
      <StyleSelector styles={jeanData.styles} />
    </div>
  );
}

export default App;
