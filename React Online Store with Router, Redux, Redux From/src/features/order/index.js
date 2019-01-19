import React from 'react';
import fetchApi from '../../modules/fetch-api.js';

export default class Order extends React.Component {
    state = {
        ordeR: null
    }

    componentDidMount() {
        fetchApi('get', `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`)
            .then(data => this.setState({ order: data}));
    }

    renderOrder() {
        const { name, email, order_items } = this.state.order;
    
        return <div>
            <h3>Order Info</h3>
            <div>Name: { name }</div>
            <div>Email: { email }</div>
            <h4>Items:</h4>

            <ul>
                {
                    order_items && order_items.map(item => {
                        const { name, image, price } = item.product;
                        return (<li key={item.id}>
                            <img src={image} alt={name} width={32} />
                            {name}
                            ({item.qty} @ $ {price} = $ {parseFloat(item.qty) * parseFloat(price)})
                        </li>)
                    })
                }

            </ul>
        </div>
    }

    render() {
        const { order } = this.state;
        return <div>
            {
                order ? this.renderOrder() : "Loading..."
            }
        </div>
    }
}
