import React from 'react'
import PropTypes from 'prop-types'
import { addCart, deleteCart, removeAll } from '../../store/cart/actions'
import { showProduct } from '../../store/product/actions'

import ProductListItem from '../ProductListItem'


export default function ProductList(props) {

  return (
    <div className="container">
      <div className="columns is-multiline is-3">
        {
          props.products.map(product =>
            <ProductListItem
              key={product.id}
              product={product}
              addCart={props.addCart}
              showProduct={props.showProduct}
            />)
        }
      </div>
    </div>
  )
}
