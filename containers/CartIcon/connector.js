import React from 'react'
import cartIcon from '../../components/cartIcon'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(cartIcon)