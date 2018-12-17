import React from 'react';

export default function StatelessComponent(props) {
    console.log(props);
    return (
        <ul>
            {
                props.items.map(e => <li>{e}</li>)
            }
        </ul>
    )
}