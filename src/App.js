import "./App.css";

import MediaGallery from "./components/media-gallery/MediaGallery";

import "./App.css";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import MobileNav from "./components/mobile-nav/MobileNav";
import Nav from "./components/nav/Nav";

function App() {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
  });



  return (
    <div className="App">
      <Nav />
      <MobileNav />
      {/* <Header /> */}
      {/* <MediaGallery /> */}

      <div>
        <div className="Jeans">
          <h3>501 ORIGINAL FIT MEN'S JEANS</h3>
          <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />
          <p className="Grey-ouy">(3111)</p>
          <h2 className="Price">$79.50</h2>
          <p className="Grey-out">Or 4 installments of $19.88</p>
          <p className="Deal">2 for $99. Applied at Checkout</p>
        </div>

        <div className="Jean-colors"></div>
      </div>
    </div>
  );
}

export default App;
