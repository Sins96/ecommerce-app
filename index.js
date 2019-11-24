import React from 'react'
import { render } from 'react-dom'
import { Route } from "react-router"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, push } from "react-router-redux"
import configureStore, { history } from './store/configureStore'
import reducer from './store/reducers'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Search from './pages/Search'
import Marvel from './pages/Marvel'
import Illumination from './pages/Illumination'
import ToyStory from './pages/ToyStory'
import 'bulma/css/bulma.min.css'


const store = configureStore();

render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path='/product' component={Product}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/marvel' component={Marvel}/>
        <Route exact path='/illumination' component={Illumination}/>
        <Route exact path='/toystory' component={ToyStory}/>
        <footer className='footer'>
        <div className='has-text-right is-italic'>
         
            <strong>SINs</strong> by Sin Yong Wei, 2018.
   
        </div>
      </footer>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)