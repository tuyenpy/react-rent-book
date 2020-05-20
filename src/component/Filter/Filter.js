import React from 'react';
import './Filter.css';

const options = [
    "All",
    "Public",
    "Private",
];

const Filter = (props) => {
    return <div className="Filter">
        <select id="filter">
            {
                options.map((option, index) =>
                    <option key={index}>{option}</option>
                )
            }
        </select>
    </div>
}

export default Filter;