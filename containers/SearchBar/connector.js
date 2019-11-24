import React from 'react'
import PropTypes from 'prop-types'
import {searchProduct} from '../../store/search/actions'
import { connect } from 'react-redux'
import SearchBar from '../../components/SearchBar'

function mapStateToProps(state, props) {

  return {
    cart: state.cart,
    productItem: state.productItem,
    initialSearch: state.initialSearch
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchProduct: (keyword) => {
      dispatch(searchProduct(keyword))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)