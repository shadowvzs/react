import React from 'react';

export default class StatefulComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            items: props.items,
            newItem: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    
    addItem(item) {
        this.setState({
            items: [...this.state.items, this.state.newItem],
            newItem: ""
        });
    }

    handleChange(e) {
        this.setState({
            newItem: e.target.value
        });
    }

    render() {
        return (
            <>
                <ul>
                    {
                        this.state.items.map( e => <li>{e}</li>)
                    }
                </ul>
                <input 
                    type="text" 
                    placeholder="Type a new item here" 
                    value={this.state.newItem}
                    onChange={this.handleChange}
                />
                <button onClick={this.addItem}>Add item to list</button>
            </>
        )
    }
}