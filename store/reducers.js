import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import cartReducer from './cart/reducers'
import productReducer from './product/reducers'
import searchReducer from './search/reducers'


export default combineReducers({
  cart: cartReducer,
  productItem: productReducer,
  initialSearch: searchReducer
});
