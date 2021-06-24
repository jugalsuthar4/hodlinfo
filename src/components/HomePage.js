import React from 'react'
import Header from './Header'
import "./HomePage.css"
import PriceMarket from './PriceMarket'
import crypto from "../images/crypto.png"
import TradePrice from './TradePrice'
import registerNow from "../images/registernow.png"
import Button from '@material-ui/core/Button';

function HomePage() {
    return (
        <div className="home">
             <Header/>
             <h2>Best Price To Trade</h2>
             <PriceMarket/>
             <img src={crypto} alt="crypto" />
             <TradePrice/>
             <img src={registerNow} alt="register"/>
             <div className="footer">
                 <h4>Copyright &copy; 2019</h4>
                 <h4 style={{margin:"0 15px"}}>hodlinfo.com</h4>
                 <h4>Developed by <span style={{color:"#74cfcb"}}>QuadTech</span></h4>
                 <h4 style={{marginLeft:"auto"}}>Support</h4>
             </div>
             <div className="app-link">
             <Button variant="outlined" color="primary">
        Add hodlinfo to Home screen
      </Button>
             </div>

        </div>
    )
}

export default HomePage
