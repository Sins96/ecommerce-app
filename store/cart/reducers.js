import {ADD_TO_CART,DELETE_FROM_CART,LOAD_CART,REMOVE_ALL,UPDATE_CART} from '../constant'
import Immutable from 'immutable'

const defaultState = Immutable.List()

const cartReducer = (state=defaultState, action) => {
  switch(action.type) {
    case LOAD_CART:
      return {
        ...state,
        cart: action.payload
      }
    case ADD_TO_CART:
      let addItem = state
      const newId = addItem.size + 1
      const targetId = action.items.id
      const newItem = Immutable.fromJS({
        
        id: newId,
        item: action.items,
        quantity: 1
      })
      const checkCart = addItem.find(x=>x.get('item').get('id')===action.items.id)
      if(checkCart !== undefined){
      const getIndex = addItem.indexOf(checkCart)
      const getQuantity = checkCart.get('quantity')
      const updateQuantity = checkCart.set('quantity',getQuantity+1)
      const updatedCart = addItem.set(getIndex,updateQuantity)
      return updatedCart
      }
      return addItem = addItem.push(newItem)
      

    case UPDATE_CART:
    let newState = state
    const checkCart = newState.find(x=>x.get('item').get('id')===action.id)
      
      const getIndex = newState.indexOf(checkCart)
      const getQuantity = checkCart.get('quantity')
      const updateQuantity = checkCart.set('quantity',getQuantity + 1)
      const updatedCart = newState.set(getIndex,updateQuantity)
      return updatedCart
      

    case DELETE_FROM_CART:
      let newState2 = state
    const checkCart = newState2.find(x=>x.get('item').get('id')===action.id)
      if(checkCart.get('quantity') !== 1){
      const getIndex = newState2.indexOf(checkCart)
      const getQuantity = checkCart.get('quantity')
      const updateQuantity = checkCart.set('quantity',getQuantity - 1)
      const updatedCart = newState2.set(getIndex,updateQuantity)
      return updatedCart
      }
      return state.filter(cartItem=>cartItem.get('item').get('id') !== action.id)

    case REMOVE_ALL:
      return state.filter(cartItem=>cartItem.get('id') !== action.id)

    default:
      return state;
  }
}

export default cartReducer