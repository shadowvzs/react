import React from 'react';
import FormField from './form-field/index';

export default class App extends React.Component {
    
    constructor() {
        super();
        this.inputs = [
            ['fullName', 'Full name'],
            ['emailAddress', 'Email Address'],
            ['password', 'Password'],
            ['confimationPassword', 'Confirm Password']
        ];

        this.state = { ...Object.assign(...this.inputs.map(e => ({[e[0]]: ''})))};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        this.setState({[key]: e.target.value} );
    }

    render() {
        return (
            <form>
                <h1> Registration </h1>
                <div>
                    { this.inputs.map(e => (
                        <FormField key={e[0]} attr={e} value={this.state[e[0]]} handleChange={this.handleChange}/>
                    )) }
                </div>
                <div>
                    <button>Sign up</button>
                </div>
            </form>
        )
    }
}