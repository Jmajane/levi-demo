import './JeanPrice.css'


function JeanPrice({ selectedStyle }) {
  return (
    <div>
    <h2>{selectedStyle.price}</h2>    
    <p className="Grey-out">Or 4 installments of $27.00</p>
    </div>
  )
}

export default JeanPrice