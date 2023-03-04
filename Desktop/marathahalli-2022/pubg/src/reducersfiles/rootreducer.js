import {  combineReducers } from 'redux';
// import Cartreducer from './cartreducer';
import Productreducer from './productreducer';
const RootReducers =combineReducers({
    product:Productreducer,
    // Cart:Cartreducer
    
   
})
export default RootReducers;