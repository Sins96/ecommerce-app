import {SHOW_PRODUCT,SEARCH_PRODUCT} from '../constant'
import data from '../../data/products.json'
import Immutable from 'immutable'

const initialState = Immutable.fromJS(data.products)

const searchReducer = (state = initialState, action) =>{
  switch(action.type){
    case SEARCH_PRODUCT:  
      const iState = state
      const serachedProduct = iState.filter(item=>item.get('title').includes(action.keyword))
    default:
      return state
  }
}

export default searchReducer
