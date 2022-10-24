import './JeanPrice.css'


function JeanPrice({ jeanColor }) {
  return (
    <div>
    <h2>{jeanColor.price}</h2>    
    <p className="Grey-out">Or 4 installments of $19.88</p>
    <p className="Deal">2 for $99. Applied at Checkout</p>
    </div>
  )
}

export default JeanPrice