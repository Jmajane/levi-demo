import "./App.css";

import { useState } from "react";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";
import MediaGallery from "./components/MediaGallery/MediaGallery";
import JeanPrice from "./components/JeanPrice/JeanPrice";
import TylmenWidget from "./components/TylmenWidget/TylmenWidget";

import jeanData from "./jeanData";
import StyleSelector from "./components/StyleSelector/StyleSelector";
import SizeSelector from "./components/SizeSelector/SizeSelector";
import PopupWidget from "./components/TylmenWidget/PopupWidget/PopupWidget";

function App() {
  const [selectedStyle, setSelectedStyle] = useState(jeanData.styles[0]);
  const [selectedPicture, setSelectedPicture] = useState(
    selectedStyle.pictures[0]
  );

  return (
    <div className="App">
      <Nav />
      <MobileNav />
      <PopupWidget />
      <div className="MobileView">
        <MediaGallery
          jeanData={jeanData}
          selectedStyle={selectedStyle}
          selectedPicture={selectedPicture}
          setSelectedPicture={setSelectedPicture}
        />
        <div className="Divider">
          <StyleSelector
            styles={jeanData.styles}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            setSelectedPicture={setSelectedPicture}
          />
          <SizeSelector selectedStyle={selectedStyle} />
          <TylmenWidget />
          <JeanPrice selectedStyle={selectedStyle} />
        </div>
      </div>
    </div>
  );
}

export default App;
