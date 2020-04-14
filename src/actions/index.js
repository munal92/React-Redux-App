import axios from "axios"
export  const FETCH_SUCCESS = "FETCH_SUCCESS";
export  const FETCH_ERROR = "FETCH_ERROR";
export  const FETCHING_DATA = "FETCHING_DATA"




export const fetchCurrentCurrencyData = () => dispatch => {
    dispatch ({
        type: FETCHING_DATA
    });

        setTimeout(() => {

            axios.get(`https://api.frankfurter.app//latest?from=USD`)
            .then(res => {
                
               
                              
                dispatch({type: FETCH_SUCCESS, payload:[{date:res.data.date , rates:res.data.rates} ]  });
                console.log("usd currency", [{date:res.data.date , rates:res.data.rates}])
            })
            .catch(err =>  {
                console.log("error",err)
                dispatch({type: FETCH_ERROR,payload: err});
            })



        },1500);



};