import React from 'react';

export default function AddButton (props) {
    const item = props.product;
    return (<button 
            onClick={ () => props.addToCart(item) }
            > Add to cart ({props.qty})
            </button>);
}