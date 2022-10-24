import "./App.css";

import { useState } from "react";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";
import JeanSelector from "./components/style-selector/StyleSelector";
import jeanData from "./components/jean-data/JeanData";
import JeanTitleRating from "./components/jean-title-rating/JeanTitleRating";



function App() {
  const [selectedJean, setSelectedJean] = useState(jeanData[0]);

  return (
    <div className="App">
      <Nav />
      <MobileNav />
      <JeanSelector jeanColor={selectedJean} colors={jeanData} />
      <JeanTitleRating jeanColor={selectedJean} />
      
    </div>
  );
}

export default App;
