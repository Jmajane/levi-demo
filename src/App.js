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

  return (
    <div className="App">
      <Nav /> 
      <Header />

      <div>


        <div className='Jeans'>
          <h3>501 ORIGINAL FIT MEN'S JEANS</h3>
          <StyledRating name="four-star" defaultValue={4.3} precision={0.1} />
        </div>
      </div>
    </div>
  );
}

export default App;
