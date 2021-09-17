import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            className={classes.mySelect}
            onChange={event => event.target.value ? onChange(event.target.value):void(0)}
        >
            <option value={defaultValue} disabled>{defaultValue} </option>
            <option/>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;