import React from 'react';
import './BookList.css';
import PropTypes from 'prop-types';

import BookItem from '../BookItem/BookItem';
import Pagination from '../Pagination/Pagination';

const BookList = (props) => {
    let { books, perPage, page, onNumPage, setCart, cart } = props;
    let numPage = books && Math.ceil(books.length / perPage);
    return <>
        <div className="BookList">
            {
                books && books.slice(page * perPage, (page + 1) * perPage)
                    .map((book, index) => {
                        return <BookItem {...book} key={index} setCart={ setCart } cart={cart} />
                    })
            }
        </div>
        <Pagination numPage={ numPage } onNumPage={ onNumPage } />
    </>
}

//props = {books: [book]}s
BookList.propTypes = PropTypes.arrayOf(PropTypes.object);

export default BookList;