import React from 'react'
import { Link } from 'react-router-dom'
import Marvel from '../containers/Marvel/connector'
import CartIcon from '../containers/CartIcon/connector'
import data from '../data/products.json'

const MarvelPage = (props) => {
  return (
    <div>
      <nav className="navbar is-transparent has-background-info is-fixed-top">
        <div className="navbar-brand">
          <Link className='navbar-item ' to="/">
            <img className='image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Home_font_awesome.svg/512px-Home_font_awesome.svg.png" />
          </Link>
          <h1 className='navbar-item title has-text-white-ter'>SINs</h1>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <Link to='/' className='navbar-item has-text-warning is-hoverable'>
              Home
        </Link>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link has-text-warning'>
                Categories
        </a>
              <div className='navbar-dropdown'>
                <Link className='navbar-item' to='/marvel'>
                Marvel
          </Link>
              <Link className='navbar-item' to='/illumination'>
                Illumination
          </Link>
          <Link className='navbar-item' to='/toystory'>
                ToyStory
          </Link>
              </div>
            </div>
          </div>
          <div className='navbar-end'>

            <CartIcon />

          </div>
        </div>
      </nav>
      <br/><br/><br/>
      <div className='tile is-ancestor'>
        <div className='tile is-parent is-2'>
          <div className='tile is-child box'>
            <aside className="menu">
              <p className="menu-label">
                Menu
               </p>
              <ul className="menu-list">
                <li><Link to='/'>Product List</Link></li>
                <li><a>Account</a></li>
              </ul>

            </aside>
          </div>
        </div>
        <div className='tile is-vertical is-parent'>

          <div className='tile is-child '>
            <br />
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li className="is-active"><a href="#" aria-current="page">Marvel</a></li>
              </ul>
            </nav>
            <Marvel />
          </div>
        </div>
      </div>

    </div>

  )
}
export default MarvelPage