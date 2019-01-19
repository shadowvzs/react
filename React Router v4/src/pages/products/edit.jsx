import React from 'react';

import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
    render() {
        return (
            <div>
                <h1> Product id: {this.props.match.params.id} </h1>
                <input name="name" type="text" placeholder="name" />
                <Link to={'/products/'+this.props.match.params.id}> View </Link>
            </div>
        )
    }
}

export default ProductDetails;