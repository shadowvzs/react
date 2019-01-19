import React from 'react';
import AddButton from './add-btn';
import RemoveButton from './remove-btn';

export default function ProductListItem(props) {
    const item = props.product;
    const itemInCart = props.cart.filter(e => e.id === item.id)[0] || false;
    const qty = itemInCart.quantity || 0;
    console.log('render product-list-item')
    return <div className="product">
        <h3>{ item.name }</h3>
        <img 
            height={100}
            alt={ item.name }
            src={ item.image }
            align="top"
        />
        <div className="description">{ item.description }</div>
        <div className="price">${ item.price }</div>
        <div>
            <AddButton {...props} qty={qty} />
            { qty ? <RemoveButton {...props} /> : null }
        </div>
    </div>
}