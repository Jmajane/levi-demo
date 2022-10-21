import "./App.css";
import Nav from "./components/nav/Nav";

import MediaGallery from "./components/media-gallery/MediaGallery";

import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating';

function App() {

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'black'
    }
  })

  const JeanColor = [
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Optic Daisy - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />,
      votes: "(2709)",
      price: "$79.50",
      waist:["24", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Light Stonewash - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />,
      votes: "(3111)",
      price: "79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Thunder Moon Rocks - Light Wash - Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.1} precision={0.1} />,
      votes: "(120)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["28", "29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "All For One - Medium Wash - Stretch", 
      rating: <StyledRating name="four-star" defaultValue={4.2} precision={0.1} />,
      votes: "(74)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Medium Stonewash - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.1} precision={0.1} />,
      votes: "(4252)",
      price: "$79.50",
      waist:["26", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["29", "30", "32", "33", "34", "36", "38", "40"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Black - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />,
      votes: "(2994)",
      price: "$79.50",
      waist:["27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["29", "30", "32", "34", "36", "38", "40"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Rinse - Dark Eash - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.2} precision={0.1} />,
      votes: "(3136)",
      price: "$79.50",
      waist:["26", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["29", "30", "32", "34", "36", "40"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Dark Stonewash - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.1} precision={0.1} />,
      votes: "(3452)",
      price: "79,50",
      waist:[ "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["28", "29", "30", "32", "33", "34", "36", "40"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Uncanny - Medium Wash - Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.1} precision={0.1} />,
      votes: "(191)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["29", "30", "32", "34", "36", "40"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "On my Radio - Medium Wash - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.1} precision={0.1} />,
      votes: "(883)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Unleaded - Light Wash - Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.6} precision={0.1} />,
      votes: "(910)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Anchor - Dark Wash - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.6} precision={0.1} />,
      votes: "(855)",
      price: "$79.50",
      waist:["24", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Higher Mountain - Light Wash - Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.1} precision={0.1} />,
      votes: "(70)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "DiRienzo - Grey - Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />,
      votes: "(2482)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36", "38", "40"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Clean Rigid - Dark Wash - Non Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />,
      votes: "(2530)",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["29", "30", "32", "34", "36", "40"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Unicycle - Dark Wash - Stretch",
      rating: <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />,
      votes: "()186",
      price: "$69.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44"],
      length:["29", "30", "32", "34", "36"],
    },
    {
      href:"https://lsco.scene7.com/is/image/lsco/A34940012-alt3-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=750",
      colorStyle: "Cast off - Brown - Non Stretch",
      rating: <StyledRating name="zero-star" defaultValue={0.0} precision={0.0} />,
      votes: "",
      price: "$79.50",
      waist:["28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42"],
      length:["29", "30", "32", "34", "36"],
    },
  ]

  return (
    <div className="App">

      <Nav />
      <MediaGallery />

      <Nav /> 
      <Header />

      <div>


        <div className='Jeans'>
          <h3>501 ORIGINAL FIT MEN'S JEANS</h3>
          <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />
          <p className='Grey-ouy'>(3111)</p>
          <h2 className='Price'>$79.50</h2>
          <p className='Grey-out'>Or 4 installments of $19.88</p>
          <p className='Deal'>2 for $99. Applied at Checkout</p>
        </div>

        <div className='Jean-colors'>

        </div>
      </div>

    </div>
  );
}

export default App;
