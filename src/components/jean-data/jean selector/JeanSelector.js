import './JeanSelector.css'

const JeanSelector = ({ JeanColor, changeSelectedImage }) => {
    const view = JeanColor.map(({ href, colorStyle, rating, votes, price, waist, length }, index) => {
        return (
            <div
            key={index}
            className="Jean-Texture"
            onClick={(e) => changeSelectedImage(e)}
            >
                <h3>501 ORIGINAL FIT MEN'S JEANS</h3>
                <p>{rating} {votes}</p>
                <h2>{price}</h2>
                <p className="Grey-out">Or 4 installments of $19.88</p>
                <p className="Deal">2 for $99. Applied at Checkout</p>
                <p>{colorStyle}</p>
                <h6>Waist</h6>
                <h6>{waist}</h6>
                <h6>Length</h6>
                <h6>{length}</h6>
            </div>
        )
    })
    return <div className='TextureSelector'>{view}</div>
}

