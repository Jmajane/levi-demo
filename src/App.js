import "./App.css";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";

import { useState } from "react";
import JeanSelector from "./components/style-selector/StyleSelector";

import jeanData from "./components/jean-data/JeanData";

function App() {
  const [selectedJean, setSelectedJean] = useState(jeanData[0]);

  return (
    <div className="App">
      <Nav />
      <MobileNav />
      <JeanSelector jeanColor={selectedJean} colors={jeanData} />

    </div>
  );
}

export default App;
