import {SHOW_PRODUCT,SEARCH_PRODUCT} from '../constant'

export function showProduct(product){
  return{
    type: SHOW_PRODUCT,
    product
  }
}
