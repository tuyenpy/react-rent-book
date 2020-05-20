import React, { useContext } from 'react';
import './BookList.css';
import PropTypes from 'prop-types';
import AppContext from '../../Context/AppContext';

import Filter from '../Filter/Filter';
import BookItem from '../BookItem/BookItem';
import Pagination from '../Pagination/Pagination';

const BookList = (props) => {
    let { books, perPage, page } = useContext(AppContext);
    let numPage = books && Math.ceil(books.length / perPage);
    return <>
        <Filter />
        <div className="BookList">
            {
                books && books.slice(page * perPage, (page + 1) * perPage)
                    .map((book, index) => {
                        return <BookItem {...book} key={index} />
                    })
            }
        </div>
        <Pagination numPage={ numPage }/>
    </>
}

//props = {books: [book]}s
BookList.propTypes = PropTypes.arrayOf(PropTypes.object);

export default BookList;