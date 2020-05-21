import React from 'react';
import './Filter.css';

const options = [
    "all",
    "public",
    "private",
];

const Filter = (props) => {
    let {onChange} = props;
    return <div className="Filter">
        <select id="filter" onChange={onChange}>
            {
                options.map((option, index) =>
                    <option key={index}>{option}</option>
                )
            }
        </select>
    </div>
}

export default Filter;