import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './product-list-item';
import fetchApi from '../../modules/fetch-api.js';


class ProductListing extends React.Component {

    componentDidMount() {
        fetchApi('get', 'https://student-example-api.herokuapp.com/v1/products.json')
            .then(data => this.props.loadProducts(data));
    }

    render() {
        const { addToCart, removeFromCart, products, cart } = this.props;
        
        return <div className="product-list">
            {
                products.map( e => 
                    <ProductListItem 
                        product={e}
                        key={e.id}
                        cart={cart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                )
            }
        </div>
    }
}

function mapStateToProps(state = {cart: {}}) {
    return {
        cart: state.cart,
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: products => {
            dispatch({ type: "LOAD", payload: products })   
        },
        addToCart: (item) => {
            dispatch({ type: "ADD", payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: "REMOVE", payload: item })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);