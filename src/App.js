import "./App.css";

import { useState } from "react";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";
import JeanSelector from "./components/style-selector/StyleSelector";
import JeanTitleRating from "./components/JeanTitleRating/JeanTitleRating";
import JeanPrice from "./components/jean-price/JeanPrice";
import MediaGallery from "./components/MediaGallery/MediaGallery";

import jeanData from "./jeanData";

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
    </div>
  );
}

export default App;
