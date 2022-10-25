import "./App.css";

import { useState } from "react";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";
import MediaGallery from "./components/MediaGallery/MediaGallery";

import jeanData from "./jeanData";
import StyleSelector from "./components/StyleSelector/StyleSelector";

function App() {
  const [selectedStyle, setSelectedStyle] = useState(jeanData.styles[1]);
  const [selectedPicture, setSelectedPicture] = useState(
    selectedStyle.pictures[0]
  );

  return (
    <div className="App">
      <Nav />
      <MobileNav />
      {/* <JeanTitleRating jeanColor={selectedJean} />
      <JeanPrice jeanColor={selectedJean} />
      <JeanSelector jeanColor={selectedJean} colors={jeanData} /> */}
      <MediaGallery
        jeanData={jeanData}
        selectedStyle={selectedStyle}
        selectedPicture={selectedPicture}
        setSelectedPicture={setSelectedPicture}
      />
      <StyleSelector
        styles={jeanData.styles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        setSelectedPicture={setSelectedPicture}
      />
    </div>
  );
}

export default App;
