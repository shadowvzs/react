import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './list';
import View from './view';
import Edit from './edit';

class ProductsPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/products`} component={List} />
                <Route exact path={`/products/:id`} component={View} />
                <Route path={`/products/edit/:id`} component={Edit} />
            </Switch>
        )
    }
}

export default ProductsPage;