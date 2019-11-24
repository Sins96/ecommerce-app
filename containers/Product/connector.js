import React from 'react'
import PropTypes from 'prop-types'
import {addCart} from '../../store/cart/actions'
import { connect } from 'react-redux'
import Product from '../../components/Product'

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
    }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Product)