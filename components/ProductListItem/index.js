import React from 'react'
import { showProduct } from '../../store/product/actions'
import { Link } from 'react-router-dom'
import './styles.css'

export default function ProductListItem(props) {
  return <div className="column is-one-quarter ">

    <div className='card'>
      <Link className='has-text-black' to='/product' onClick={() => props.showProduct(props.product)}>

        <div className="card-image">
          <figure className="image is-square">
            <img 
              title={props.product.title}
              src={props.product.image}
            />
          </figure>
        </div>
        <div className='card-content'>
          <span className="has-text-weight-bold is-clipped">{props.product.title}</span>
          <div className='has-text-danger'>RM{props.product.price}</div></div></Link>
      <div className='card-footer'>
        <a className='card-footer-item has-background-info has-text-white' onClick={() => props.addCart(props.product)}>
          Add to cart
        </a>
      </div>
    </div>

  </div>
}
