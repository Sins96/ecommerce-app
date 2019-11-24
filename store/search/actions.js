import {SHOW_PRODUCT,SEARCH_PRODUCT} from '../constant'

export function searchProduct(keyword){
  return{
    type: SEARCH_PRODUCT,
    keyword
  }
}