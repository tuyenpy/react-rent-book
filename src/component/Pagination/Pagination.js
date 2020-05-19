import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    let { numPage, onNumPage } = props;

    return <div className="Pagination">
        <button>Prev</button>
        {
            numPage && Array.from(Array(numPage).keys())
                .map((item, index) =>
                    <button key={index} onClick={() => onNumPage(item)}>{item + 1}</button>)
        }
        <button>Next</button>
    </div>
}

export default Pagination;