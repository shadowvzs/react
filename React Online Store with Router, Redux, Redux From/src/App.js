import React, {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './css/index.css';
import Router from './Router';
import { connect } from 'react-redux';

const Navigation = (props) => (<nav>
    <ul className="top-menu">
        <li> <NavLink to='/'>Home </NavLink> </li>
        <li> <NavLink to='/cart'>Cart ({ props.cart.reduce((t,c) => t+c.quantity, 0) })</NavLink> </li>
        <li> <NavLink to='/checkout'>Checkout</NavLink> </li>
    </ul>
</nav>)

class App extends Component {
 
    render() {
        console.log('app render')
        return (
            <div className="app"> 
                <Navigation {...this.props}/>
                <Router />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default withRouter(connect(mapStateToProps)(App));