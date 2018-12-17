import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



const root = document.getElementById('root');

class Root extends React.Component {

    render() {
        return (
            <>
                <App/>
            </>
        );
    }
}

ReactDOM.render(<Root />, root);