import {ADD_TO_CART,DELETE_FROM_CART,LOAD_CART,REMOVE_ALL,RECEIVE_CART,UPDATE_CART} from '../constant'

export function addCart(items){
    return {
        type: ADD_TO_CART,
        items
    }
}

export function deleteCart(id){
  return{
    type: DELETE_FROM_CART,
    id
  }
}

export function removeAll(id){
  return{
    type: REMOVE_ALL,
    id
  }
}

export function updateCart(id){
  return{
    type: UPDATE_CART,
    id
  }
}

