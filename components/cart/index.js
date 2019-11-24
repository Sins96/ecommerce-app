import React from 'react'
import Immutable from 'immutable'
import { Link } from 'react-router-dom'
import { addCart, deleteCart, removeAll, updateCart, loadCart } from '../../store/cart/actions'
import { getCartTotalWithTax, getCartTotalWithoutTax, getCartTotalTax } from '../../store/cart/selectors'
import './style.css'

export default function Cart(props) {
  if (props.cart !== Immutable.List()) {
    const subtotal = getCartTotalWithTax(props)
    return (
      <div className='container'>
        <div className='tile is-ancestor'>
          <div className='tile is-parent'>
            <div className='tile is-child box'>
              <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th className='has-text-centered'>Image</th>
                    <th className='has-text-centered'>Product Name</th>
                    <th className='has-text-centered'>Quantity</th>
                    <th className='has-text-centered'>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.cart.map(item => <tr>
                      <td><img className='image is-128x128' src={item.get('item').get('image')}></img></td>
                      <td>{item.get('item').get('title')}</td>
                      <td className='has-text-centered'>
                      <a className='button is-primary is-outlined is-normal'
                          onClick={(e) => props.updateCart(item.get('item').get('id'))}
                        > +  </a>
                        <input className="input has-text-centered price" type="text" placeholder={item.get('quantity')} readOnly />
                        

                        <a className='button is-primary is-outlined is-normal '
                          onClick={(e) => props.deleteCart(item.get('item').get('id'))}
                        > -  </a></td>
                      <td>RM{(item.get('item').get('price') * item.get('quantity')).toFixed(2)}</td>

                      <td>
                        <a className="delete"
                          onClick={(e) => props.removeAll(item.get('id'))}
                        ></a>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className='tile is-4  is-parent '>
            <div className="tile is-child card ">
              <div>
                <div className='card-header'>
                  <div className='card-header-title'>
                    <div className='content is-medium'>
                      <p>Order Summary</p>
                    </div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='content is-medium'>
                    <strong>Total:  </strong> <span>RM {getCartTotalWithoutTax(props)}</span>
                  </div>
                  <div className='content is-medium'>
                    <strong>Tax (6% SST): </strong> <span>RM {getCartTotalTax(props)}</span>
                  </div>
                  <div className='content is-medium'>
                    <strong>SubTotal: </strong> <span>RM {getCartTotalWithTax(props)}</span>
                  </div>
                </div>
                <div className='card-footer'>
                  <Link to='/' className='card-footer-item has-background-link has-text-white' >
                    Continue Shopping
                </Link>
                  <a className='card-footer-item has-background-link has-text-white' onClick={() => { alert("Subtotal is: RM" + subtotal) }}>
                    Checkout
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="message is-dark"><p className='message-body has-text-centered'>There are no items in this cart</p><Link to='/' className='button is-primary is-pulled-right'>Continue Shopping</Link></div>

  )
}
