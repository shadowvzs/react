import React from 'react';

import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
    render() {
        return (
            <div>
                <h1> Product details </h1>
                <h3> Product id: {this.props.match.params.id} </h3>
                <Link to={'/products/edit/'+this.props.match.params.id}> Edit </Link>
            </div>
        )
    }
}

export default ProductDetails;