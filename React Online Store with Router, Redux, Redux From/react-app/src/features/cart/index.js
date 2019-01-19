import React from 'react';
import { connect } from 'react-redux';

function Cart(props) {
    return <table className="cart">
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                props.cart.map(e => <tr key={e.id}>
                    <td> {e.name} </td>
                    <td> {e.quantity} </td>
                    <td> 
                        <button
                            onClick={ () => props.addToCart(e) }
                        >+</button> 
                        <button
                            onClick={ () => props.removeFromCart(e) }
                        >-</button>                         
                    </td>
                    <td>
                        <button
                            onClick={ () => props.removeAllFromCart(e) }
                        >Remove all</button>                          
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: e => {
            dispatch({type: 'ADD', payload: e})
        },
        removeFromCart: e => {
            dispatch({type: 'REMOVE', payload: e})
        },
        removeAllFromCart: e => {
            dispatch({type: 'REMOVE_ALL', payload: e})
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);