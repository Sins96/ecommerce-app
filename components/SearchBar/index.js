import React from 'react'
import { searchProduct } from '../../store/search/actions'
import { Link } from 'react-router-dom'

const handleSearchChange = (e) => {
  this.setState({ searchItem: e.target.value });
}

const SearchBar = (props) => {
  return (
    <div className='navbar-item'>
      <div className='field has-addons'>
        <div className="field-label is-normal">

          <label className="label">Search:</label>
        </div>
        <div className="control">

          <input id='search' className="input is-normal" type="text" placeholder="In development...." value={props.searchItem} onChange={this.handleSearchChange} />

        </div>
        <div className="control">
          <Link to='/search' className="button is-warning is-normal" onClick={() => props.searchProduct(props.searchItem)}>
            Search
              </Link>
        </div>
      </div>
    </div>
  )

}

export default SearchBar

