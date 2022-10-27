import React from 'react'


export default function TylmenWidget() {
  return (
    <div>
        <p>Tylmen ID</p>
        <br />
        <p>T-Score</p>
        <br />
        <div>

            <p>0</p>
            <p>5</p>
            <p>10</p>
            <br />
        </div>
        <div>
            <p>Too Tight</p>
            <p>Just Right</p>
            <p>Too Loose</p>
        </div>

        <br />

        <p>This Product is size 26 is a Good Fit for your Style.</p>

        <br />

        <div>
            <p>Item Specification</p>
            <p className='tylmen'>High Waist</p>
            <p>Item Fit Style</p>
            <p className='tylmen'>Regular</p>
            <p>Your Preference</p>
            <p className='tylmen'>Loose</p>
            <img src='' alt='pants' />
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
                    <td>29.6</td>
                </tr>
            <br></br>
                <tr>
                    <td>Rise</td>
                    <td>12</td>
                    <td>11.5</td>
                </tr>
            <br></br>
                <tr>
                    <td>Thigh</td>
                    <td>19</td>
                    <td>20</td>
                </tr>
            <br></br>
                <tr>
                    <td>Inseam</td>
                    <td>26</td>
                    <td>26.3</td>
                </tr>
            <br></br>
                <tr>
                    <td>Length</td>
                    <td>241</td>
                    <td>41.2</td>
                </tr>
            </table>
            <br></br>
        </div>
    </div>
  )
}
