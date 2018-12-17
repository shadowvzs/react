import React from 'react';

const FormField = props => {
    const [name, label] = props.attr;
    const type = name.match(/password/i) ? "password" : "text";
    return (
        <div key={name}>
            <label htmlFor={name}>{label}: </label>
            <input
                type={type}
                name={name}
                value={props.value}
                onChange={ e => props.handleChange(e, name) }
            />
        </div>
    )
}


export default FormField;