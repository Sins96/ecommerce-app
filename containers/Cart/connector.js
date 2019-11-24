import React from 'react'
import { connect } from 'react-redux'
import {addCart,deleteCart,removeAll,updateCart,loadCart} from '../../store/cart/actions'
import Cart from '../../components/cart'

function mapStateToProps(state) {
  return {
    cart: state.cart,
    initialSearch:state.initialSearch,
    productItem:state.productItem
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCart:(items)=>{
      dispatch(loadCart(items))
    },
    updateCart: (id) => {
      dispatch(updateCart(id))
    },
    deleteCart: (id) => {
      dispatch(deleteCart(id))
    },
    removeAll: (item) => {
      dispatch(removeAll(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
