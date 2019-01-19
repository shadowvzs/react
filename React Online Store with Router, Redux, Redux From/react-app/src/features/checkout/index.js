import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart';
import CheckoutForm from './form';
import fetchApi from '../../modules/fetch-api.js';


function submitOrder(values, cart) {
    const { email, name } = values.order;
    fetchApi(
        'post',
        'https://student-example-api.herokuapp.com/v1/orders.json',
        {
            order: {
                name, 
                email,
                order_items_attributes: cart.map( item => ({
                    product_id: item.id,
                    qty: item.quantity,
                }))
            }
        }
    ).then(data => {
        if (data.error) {
            return alert('Something went wrong! ' + data.error);
        }
        document.location.href = `/orders/${data.id}`;
    });
}


function Checkout(props) {
    const { cart } = props;
    return <div className="checkout">
        <div>
            <Cart />
        </div>
        <CheckoutForm onSubmit={ (values) => submitOrder(values, cart) } />
    </div>;
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Checkout);