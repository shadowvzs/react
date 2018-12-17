import React from 'react';
import StatelessComponent from './components/stateless-component';
import StatefulComponent from './components/stateful-component';

export default function App() {
    return (
        <div>
            <h2>Stateless component</h2>
            <StatelessComponent
                items={[
                    "Apple", "Orange", "Mango"
                ]}
            />
            <h2> Statefull component</h2>
            <StatefulComponent
                items={[
                    "Hammer", "Drill", "Glue"
                ]}
            />
        </div>
    )
}