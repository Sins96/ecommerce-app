import { Link } from 'react-router-dom'
import React from 'react'
import { getCart } from '../../store/cart/selectors'

export default function CartIcon(props) {
  return (
    <div className="navbar-item">
      <Link to="/cart" >
        <img className='image ' src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" />
        <div className='is-overlay has-text-left has-text-weight-semibold has-text-black'>
          {props.cart.reduce((acc, x) => acc + x.get('quantity'), 0)}
        </div>
      </Link>
    </div>
  )
}

