import React from 'react'
import Immutable from 'immutable'
import { Link } from 'react-router-dom'
import { searchProduct } from '../store/search/actions'
import {filterMarvel,filterIllumination,filterToyStory} from '../../store/search/selectors'

const Search = (props) => {
  
  return (
  <div className='message-header'>
      <strong className='has-text-white'>
        NO RESULT FOUND!!!
      </strong>
      <Link to='/' className='button is-primary is-pulled-right'>HomePage</Link>
    </div>
    
  )
}

export default Search