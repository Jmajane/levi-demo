import "./App.css";

import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";

import { useState } from "react";
import JeanSelector from "./components/jean-selector/JeanSelector";

import jeanData from "./components/jean-data/jeanData";

function App() {
  const [selectedJean, setSelectedJean] = useState(jeanData[0]);

  return (
    <div className="App">
      <Nav />
      <MobileNav />
      <JeanSelector jeanColor={selectedJean} />

      {/* <div>
        <div className="Jeans">
          <h3>501 ORIGINAL FIT MEN'S JEANS</h3>
          <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />
          <p className="Grey-ouy">(3111)</p>
          <h2 className="Price">$79.50</h2>
          <p className="Grey-out">Or 4 installments of $19.88</p>
          <p className="Deal">2 for $99. Applied at Checkout</p>
        </div>

        <div className="Jean-colors"></div>
      </div> */}
    </div>
  );
}

export default App;
