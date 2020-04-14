import {FETCH_SUCCESS ,FETCH_ERROR ,FETCHING_DATA} from "../actions"




const initialState = {
data: [],
isLoading: false ,
error: ""
};


export function curCurrencyRed   (state=initialState, action) {
    switch(action.type){
            case FETCHING_DATA: {
                return{
                    ...state,
                    isLoading: true 
                }
            }
            case FETCH_SUCCESS: {
                return{
                    ...state,
                    data: action.payload,
                    isLoading:false,
                    error: ''
                }
            }
            case FETCH_ERROR: {
                return{
                    ...state,
                    isLoading:false,
                    error: action.payload
                }
            }





        default:
        return state
    }
} 