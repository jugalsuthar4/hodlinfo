import React from "react";
import "./TradePrice.css";
import war from "../images/warzix.png"
import bit from "../images/bitbns.png"
import gio from "../images/giotus.png"
import colo from "../images/colordax.png"
import zeb from "../images/zebpay.png"
import coin from "../images/coindcx.svg"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function TradePrice() {
    const data=[
        {
            sr:1,
            pic:war,
            about:"warzix",
            lastTradePrice:"₹26,30,000",
            buySellPrice:"₹26,30,000/₹26,36,000",
            Difference:"-0.73 %",
            saving:"₹19,343",
            grow:false

        },
        {
            sr:2,
            pic:bit,
            about:"bitbns",
            lastTradePrice:"₹26,53,563",
            buySellPrice:"₹26,53,563/₹26,67,412",
            Difference:"-0.16 %",
            saving:"₹4,220",
            grow:true

        }
        ,
        {
            sr:3,
            pic:gio,
            about:"giotus",
            lastTradePrice:"₹26,80,000",
            buySellPrice:"₹26,80,000/₹26,75,999",
            Difference:"1.16%",
            saving:"₹30,656",
            grow:true

        },
        {
            sr:4,
            pic:colo,
            about:"colodax",
            lastTradePrice:"₹26,41,000",
            buySellPrice:"₹26,41,000/₹26,67,901",
            Difference:"-0.27 %",
            saving:"₹19,343",
            grow:false

        },
        {
            sr:5,
            pic:zeb,
            about:"zebpay",
            lastTradePrice:"₹26,50,000",
            buySellPrice:"₹26,50,000/₹26,46,000",
            Difference:"-0.01 %",
            saving:"₹656",
            grow:true

        },
        {
            sr:6,
            pic:coin,
            about:"coindcx",
            lastTradePrice:"₹26,40,226",
            buySellPrice:"₹26,32,557/₹26,42,058",
            Difference:"-0.34 %",
            saving:"₹9,116",
            grow:false

        }
        

    ]
   
  return (
    <div className="tradeprice">
      <table>
        <tr style={{color:"grey"}}>
          <th>#</th>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy/Sell Price</th>
          <th>Difference</th>
          <th>Savings</th>
        </tr>
         <br/>
       {
           data.map((currentData)=>{
               return(
                <tr className="data-tr">
          <td>{currentData.sr}</td>
          <td><img src={currentData.pic} alt="warzix"/></td>
          <td>₹26,30,000</td>
          <td>₹26,30,000/₹26,36,000</td>
          <td className={!currentData.grow?"red-flag":"blue-flag"}>-0.73 %</td>
          <td className={!currentData.grow?"red-flag":"blue-flag"}>₹ 19,343 {!currentData.grow?<ExpandMoreIcon/>:<ExpandLessIcon/>} </td>
        </tr>
       
               )
           })
       }
        
       
        
      </table>
    </div>
  );
}

export default TradePrice;
