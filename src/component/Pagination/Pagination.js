import React, { useContext } from 'react';
import './Pagination.css';
import AppContext from '../../Context/AppContext';

const Pagination = (props) => {
    let { numPage } = props;
    let { onNumPage } = useContext(AppContext);

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