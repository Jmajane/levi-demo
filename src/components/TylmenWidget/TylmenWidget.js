import './TylmenWidget.css'
import JeansOutline from "../WidgetImages/JeansOutline.svg"


export default function TylmenWidget() {

    let fit = "Good Fit"

  return (
    <div className='widget'>
        <p className='description'>Tylmen ID</p>
        <br />
        <p className='description'>T-Score</p>
        <br />
        <div>
            <table>
                <tr className='headings'>
                    <th>0</th>
                    <th>5</th>
                    <th>10</th>
                </tr>
                <br></br>
                <tr>
                    <td>Too Tight</td>
                    <td>Just Right</td>
                    <td>Too Long</td>
                </tr>
            </table>
        </div>

        <br />

        <p className='Info'>This Product is size 26 is a {fit} for your Style.</p>

        <br />

        <div className=''>
            <p className='tylmenDescription'>Item Specification</p>
            <p className='tylmen'>High Waist</p>
            <p className='tylmenDescription'>Item Fit Style</p>
            <p className='tylmen'>Regular</p>
            <p className='tylmenDescription'>Your Preference</p>
            <p className='tylmen'>Loose</p>
            <img src={JeansOutline} alt='pants' />
        </div>

        <br />

        <div>
            <table>
                <tr>
                    <th>(Centimeters)</th>
                    <th>Product Size</th>
                    <th>Your Size</th>
                </tr>
            <br></br>
                <tr>
                    <td>Waist</td>
                    <td>28</td>
                    <td className='Fit'>29.6</td>
                </tr>
            <br></br>
                <tr>
                    <td>Rise</td>
                    <td>12</td>
                    <td className='Fit'>11.5</td>
                </tr>
            <br></br>
                <tr>
                    <td>Thigh</td>
                    <td>19</td>
                    <td className='Fit'>20</td>
                </tr>
            <br></br>
                <tr>
                    <td>Inseam</td>
                    <td>26</td>
                    <td className='Fit'>26.3</td>
                </tr>
            <br></br>
                <tr>
                    <td>Length</td>
                    <td>41</td>
                    <td className='Fit'>41.2</td>
                </tr>
            </table>
            <br></br>
        </div>
    </div>
  )
}
