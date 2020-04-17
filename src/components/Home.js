import React from "react";
import Card from "../components/Card";
import Charts from "../components/Charts";
import "../App.css";
import { connect } from "react-redux";
import { fetchCurrentCurrencyData, fetchChangesByDate } from "../actions";

//-----
import turkeyflag from "../img/turkey.png";
import usaflag from "../img/usa.png";
import audflag from "../img/australia.png";
import euroflag from "../img/european-union.png";
import lambdaLogo from "../img/lambda.png";

const Home = (props) => {
  
  return (
    <div>
      <div className="nav_container">
        <img
          style={{ height: "5%", width: "5%", padding: "9px" }}
          src={lambdaLogo}
        />
        <nav className="logo"> LAMBDA CURRENCY </nav>
      </div>
      {/* ----------------Header ---------- */}

      <div className="header_cont">
        <div className="flags_cont">
          <Card
            symbolC={"₺"}
            currency={props.data.map((res) => res.rates.TRY.toFixed(2))}
            turkeyflag={turkeyflag}
            cur={"TRY"}
          />
          <Card
            symbolC={"$"}
            currency={props.data.map((res) => res.rates.USD.toFixed(2))}
            turkeyflag={usaflag}
            cur={"USD"}
          />
          <Card
            symbolC={"€"}
            currency={(1).toFixed(2)}
            turkeyflag={euroflag}
            cur={"EUR"}
          />
          <Card
            symbolC={"$"}
            currency={props.data.map((res) => res.rates.AUD.toFixed(2))}
            turkeyflag={audflag}
            cur={"AUD"}
          />
        </div>
        <div className="flags_btn">
          <button
            className={
              props.isLoading
                ? "button is-primary is-loading is-large"
                : "button is-primary is-large"
            }
            onClick={() => {
              return (
                props.fetchCurrentCurrencyData(), props.fetchChangesByDate()
              );
            }}
          >
            Get Latest Currency!
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.curCurrencyRed.data,

    isLoading: state.curCurrencyRed.isLoading,
    error: state.curCurrencyRed.error,
  };
};
export default connect(mapStateToProps, {
  fetchCurrentCurrencyData,
  fetchChangesByDate,
})(Home);
