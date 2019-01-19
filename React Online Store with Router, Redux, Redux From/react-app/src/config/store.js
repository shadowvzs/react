import { createStore, combineReducers } from 'redux';

import cartReducer from '../features/cart/reducer';
import productReducer from '../features/product-listing/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    form: formReducer
})

const defaultState = {
    cart: []
}

// firefox and chome dev plugin
/*
const devTool = (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ 
                ? window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject 
                : null)
                || window.__REDUX_DEVTOOLS_EXTENSION__ 
                || null;
*/

const store = createStore(
    rootReducer,
    defaultState //or devTool ? devTool() : {}
)

export default store;