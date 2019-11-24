import {SHOW_PRODUCT,SEARCH_PRODUCT} from '../constant'
import Immutable from 'immutable'

const DefaultState = Immutable.Map()

const productReducer = (state=DefaultState,action) =>{
  switch(action.type){
    case SHOW_PRODUCT:
      let showItem = state
      if(showItem !== Immutable.Map()){
      showItem = showItem.clear()
      showItem = showItem.merge(action.product)
      return showItem}
      else{
        showItem = showItem.merge(action.product)
        return showItem
      }

    default:
      return state
  }
}

export default productReducer