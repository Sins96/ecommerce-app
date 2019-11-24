import React from 'react'
import Immutable from 'immutable'
import { Link } from 'react-router-dom'
import { addCart } from '../store/cart/actions'

const Product = (props) => {
  if (props.productItem !== Immutable.Map()) {
    return (
      <div className='container'>
        <div className='box'>


          <figure className="image is-128x128">
            <img
              title={props.productItem.get('title')}
              src={props.productItem.get('image')}
            />
          </figure>


          <div className='content is-large'>
            <strong>{props.productItem.get('title')}</strong>
          </div>
          <p className='is-large'>
            <strong>Description:</strong><br />
            {props.productItem.get('description')}
          </p>
          <br />
          <div className='is-large'>
            <strong>Price:  RM{props.productItem.get('price')}</strong>
          </div>
          <div className='has-text-right'>
            <div className='button is-primary ' onClick={() => props.addCart(props.productItem.toJS())}>
              Add To Cart
          </div>
          </div>

        </div>
        <div className='has-text-right'>
          <Link to='/' className='button is-primary is-pulled-right'>Continue Shopping</Link>
        </div>
      </div>
    )
  }
  return (<div></div>)
}
export default Product