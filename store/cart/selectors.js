import { createSelector } from 'reselect'

export const stateCart = state =>state.cart

export const getCartTotalWithTax = createSelector(
  [stateCart],
  cart =>{
    return cart.reduce((acc,x)=>acc + x.get('quantity')*x.get('item').get('price')*1.06,0).toFixed(2)
  }
)

export const getCartTotalWithoutTax = createSelector(
  [stateCart],
  cart =>{
    return cart.reduce((acc,x)=>acc + x.get('quantity')*x.get('item').get('price'),0).toFixed(2)
  }
)

export const getCartTotalTax = createSelector(
  [stateCart],
  cart =>{
    return cart.reduce((acc,x)=>acc + x.get('quantity')*x.get('item').get('price')*0.06,0).toFixed(2)
  }
)

export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}