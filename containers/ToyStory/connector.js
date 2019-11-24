import React from 'react'
import PropTypes from 'prop-types'
import {addCart} from '../../store/cart/actions'
import {showProduct} from '../../store/product/actions'
import { connect } from 'react-redux'
import ToyStory from '../../components/ToyStory'

function mapStateToProps(state,props) {
  
  return{
    cart:state.cart,
    productItem:state.productItem,
    initialSearch:state.initialSearch
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCart: (items) => {
      dispatch(addCart(items))
    },
    showProduct: (product)=>{
      dispatch(showProduct(product))
    }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ToyStory)