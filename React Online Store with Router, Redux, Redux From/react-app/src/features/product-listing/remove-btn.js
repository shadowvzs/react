import React from 'react';

export default function RemoveButton (props) {
    const item = props.product;
    return (<button onClick={ () => props.removeFromCart(item) }> 
            Remove 
        </button>);
}