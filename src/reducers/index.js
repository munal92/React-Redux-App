import { combineReducers } from 'redux';
import { catImageReducer } from './catImageReducer.js';


export default combineReducers({
    image: catImageReducer
    
});