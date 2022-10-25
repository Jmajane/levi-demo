import "./App.css";

import { useState } from "react";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";
import MediaGallery from "./components/MediaGallery/MediaGallery";

import jeanData from "./jeanData";
import StyleSelector from "./components/StyleSelector/StyleSelector";
import SizeSelector from "./components/SizeSelector/SizeSelector";

function App() {
  const [selectedStyle, setSelectedStyle] = useState(jeanData.styles[0]);
  const [selectedPicture, setSelectedPicture] = useState(
    selectedStyle.pictures[0]
  );

  return (
    <div className="App">
      <Nav />
      <MobileNav />
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
        </div>
      </div>
      <div className="DesktopView"></div>
    </div>
  );
}

export default App;
