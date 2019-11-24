import React from 'react'
import Immutable from 'immutable'
import { Link } from 'react-router-dom'
import { filterMarvel, filterIllumination, filterToyStory } from '../../store/search/selectors'
import { showProduct } from '../../store/product/actions'

const Marvel = (props) => {
  return (
    <div className="container">
      <div className="columns is-multiline is-3">
        {filterMarvel(props).map(item =>{return(
          <div className="column is-one-quarter ">

    <div className='card'>
      <Link className='has-text-black' to='/product' onClick={() => props.showProduct(item)}>

        <div className="card-image">
          <figure className="image is-square">
            <img 
              title={item.get('title')}
              src={item.get('image')}
            />
          </figure>
        </div>
        <div className='card-content'>
          <span className="has-text-weight-bold is-clipped">{item.get('title')}</span>
          <div className='has-text-danger'>RM{item.get('price')}</div></div></Link>
      <div className='card-footer'>
        <a className='card-footer-item has-background-info has-text-white' onClick={() => props.addCart(item.toJS())}>
          Add to cart
        </a>
      </div>
    </div>

  </div>
        )})}
      </div>
    </div>
  )
}

export default Marvel