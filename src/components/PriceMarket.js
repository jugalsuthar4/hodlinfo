import React from 'react'
import "./PriceMarket.css"

function PriceMarket() {
    return (
        <div className="market">
              <div className="data-percentage">
                  <h1>0.01 %</h1>
                  <h4>5 Mins</h4>
              </div>
              <div className="data-percentage">
                  <h1>0.78 %</h1>
                  <h4>1 Hour</h4>
              </div>
              <div className="data-rupees">
                  <h1>₹ 7,955</h1>
                  <h4>Average ZEC/INR net price including commission</h4>
              </div>
              <div className="data-percentage">
                  <h1>3.29 %</h1>
                  <h4>5 Mins</h4>
              </div>
              <div className="data-percentage">
                  <h1>3.96 %</h1>
                  <h4>7 Days</h4>
              </div>
              
        </div>
    )
}

export default PriceMarket
