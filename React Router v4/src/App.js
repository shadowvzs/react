import React from 'react';

import { Switch, Route } from 'react-router-dom';

import LandingPage  from './pages/landing/index';
import AboutUs  from './pages/about-us';
import Products  from './pages/products';

import NavBar  from './components/navbar';

export default function App (props) {
    
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path={'/'} component={LandingPage} />
                <Route path={'/about-us'} component={AboutUs} />
                <Route path={'/products'} component={Products} />
            </Switch>
        </>
    )
   
}