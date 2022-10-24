import "./App.css";

import { useState } from "react";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";
import JeanSelector from "./components/style-selector/StyleSelector";
import jeanData from "./components/jean-data/JeanData";
import JeanTitleRating from "./components/jean-title-rating/JeanTitleRating";
import JeanPrice from "./components/jean-price/JeanPrice";


function App() {
  const [selectedJean, setSelectedJean] = useState(jeanData[0]);

  return (
    <div className="App">
      <Nav />
      <MobileNav />
      <JeanTitleRating jeanColor={selectedJean} />
      <JeanPrice jeanColor={selectedJean} />
      <JeanSelector jeanColor={selectedJean} colors={jeanData} />

    </div>
  );
}

export default App;
