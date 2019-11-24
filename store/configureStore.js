import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from "react-router-redux"
import Immutable from 'immutable';
import { createLogger } from 'redux-logger'
import createHistory from "history/createBrowserHistory"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// Create a history 
const history = createHistory();
// ----- Middleware - for intercepting and dispatching navigation actions
const middlewareForRouter = routerMiddleware(history);
const middlewareForLogger = createLogger({
  stateTransformer: (state) => {
    let newState = {};
    for (var i of Object.keys(state)) {
      newState[i] = Immutable.Iterable.isIterable(state[i]) ? state[i].toJS() : newState[i];
    };
    return newState;
  }
});

// ----- redux-devtools setup and usage 
// See https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = composeWithDevTools({ name: 'test' });
const enhancer = composeWithDevTools(
  applyMiddleware(middlewareForRouter, middlewareForLogger),
);

export default function configureStore(initialState = {}) {

  const persistedCart = localStorage.getItem('cart');
  console.log(persistedCart)
  const initialImmutableCart = Immutable.fromJS(!!persistedCart ? JSON.parse(persistedCart) : [])
  const persistedProduct = localStorage.getItem('product')
  const initialImmutableProduct = Immutable.fromJS(!!persistedProduct ? JSON.parse(persistedProduct) : {})

  initialState = { ...initialState, cart: initialImmutableCart, productItem: initialImmutableProduct }

  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/reactjs/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
    );
  }
  store.subscribe(() => {
    const { cart } = store.getState();
    const { productItem } = store.getState();
    if (!!cart && cart.size > 0) {
      localStorage.setItem('cart', JSON.stringify(cart.toJSON()))
    }
    if (!!productItem && productItem.size > 0) {
      localStorage.setItem('product', JSON.stringify(productItem.toJSON()))
    }
  })

  return store;


}

export const history = history;