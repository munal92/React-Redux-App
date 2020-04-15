import axios from "axios";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCH_SUCCESS2 = "FETCH_SUCCESS2";
export const FETCH_ERROR2 = "FETCH_ERROR2";
export const FETCHING_DATA2 = "FETCHING_DATA2";
///https://www.frankfurter.app/docs/#historical  API DOC

export const fetchCurrentCurrencyData = () => (dispatch) => {
  dispatch({
    type: FETCHING_DATA,
  });

  setTimeout(() => {
    axios
      .get(`https://api.frankfurter.app//latest?from=EUR`)
      .then((res) => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: [{ date: res.data.date, rates: res.data.rates }],
        });
        console.log("usd currency", [
          { date: res.data.date, rates: res.data.rates },
        ]);
      })
      .catch((err) => {
        console.log("error", err);
        dispatch({ type: FETCH_ERROR, payload: err });
      });
  }, 1500);
};

export const fetchChangesByDate = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA });

  axios
    .get(`https://api.frankfurter.app/${parseTenDays()}..${parseDays()}?to=usd`)
    .then((res) => {
      console.log("axios between", res.data.rates);
      dispatch({ type: FETCH_SUCCESS2, payload: res.data.rates });
    })

    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_ERROR2 });
    });
};

function parseTenDays() {
  let date = new Date();
  date.setDate(date.getDate() - 10);
  let dateParsed =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);

  return dateParsed;
}

function parseDays() {
  let date = new Date();

  let dateParsed =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);
  return dateParsed;
}

console.log("bakalim", parseDays(), parseTenDays());
