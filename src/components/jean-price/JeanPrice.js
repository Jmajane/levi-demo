import './JeanPrice.css'


function JeanPrice({ jeanColor }) {
  return (
    <div>
    <h2>{jeanColor.styles[0].price}</h2>    
    <p className="Grey-out">Or 4 installments of $27.00</p>
    </div>
  )
}

export default JeanPrice