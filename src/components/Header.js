import React from "react";
import "./Header.css";
import Logo from "../images/hodlinfo.png";
import TelegramIcon from "@material-ui/icons/Telegram";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
        <h5>
          Powered By <span style={{ color: "#74cfcb" }}>Finstreet</span>
        </h5>
      </div>
      <div className="header__btc">
        <select className="select__button">
          <option value="1">INR</option>
        </select>
        <select className="select__button">
          <option value="1" selected>
            Audi
          </option>
          <option value="2" className="option-select">
            BTC
          </option>
          <option value="3" className="option-select">
            ETH
          </option>
          <option value="4" className="option-select">
            USDT
          </option>
          <option value="5" className="option-select">
            XRP
          </option>
          <option value="6" className="option-select">
            TRX
          </option>
          <option value="7" className="option-select">
            DASH
          </option>
          <option value="8" className="option-select">
            ZEC
          </option>
          <option value="9" className="option-select">
            XEM
          </option>
          <option value="10" className="option-select">
            IOST
          </option>
          <option value="11" className="option-select">
            WIN
          </option>
          <option value="12" className="option-select">
            BIT
          </option>
          <option value="12" className="option-select">
            WRX
          </option>
        </select>

        <button className="select__button">BUY BTC</button>
      </div>
      <div className="header__telegramLink">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={[
            ["#74cfcb", 0.33],
            ["#74cfcb", 0.33],
            ["#74cfcb", 0.33],
          ]}
          size={50}
          strokeWidth={4}
          onComplete={() => {
            return [true, 0];
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <button>
          <TelegramIcon />
          Connect Telegram
        </button>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
