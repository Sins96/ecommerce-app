import {createSelector} from 'reselect'

export const productState = state => state.initialSearch

export const filterMarvel = createSelector(
  [productState],
  products => {
    return products.filter(item=>item.get('keyword')==="Marvel")
  }
)

export const filterIllumination = createSelector(
  [productState],
  products => {
    return products.filter(item=>item.get('keyword')==="Illumination")
  }
)

export const filterToyStory = createSelector(
  [productState],
  products => {
    return products.filter(item=>item.get('keyword')==="ToyStory")
  }
)
