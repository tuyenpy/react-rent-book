import React, { useContext, useState } from 'react';
import './BookList.css';
import AppContext from '../../Context/AppContext';

import Filter from '../Filter/Filter';
import BookItem from '../BookItem/BookItem';
import Pagination from '../Pagination/Pagination';


const BookList = (props) => {
    let { books, perPage, page } = useContext(AppContext);
    //not defined state = [] -- truthy
    let [state, setState] = useState();
    const onChange = (e) => {
        // filter public books
        if (e.target.value === 'public') {
            let filterBook = books.filter(element => element.public === true);
            setState(filterBook);
        }
        // filter private books
        if (e.target.value === 'private') {
            let filterBook = books.filter(element => element.public === false);
            setState(filterBook);
        }
        // all book
        if (e.target.value === 'all') {
            setState(books);
        }
    }
    // if the existing state is assigned by the state, if not by the books
    let newBooks = state || books;
    //total pages
    let numPage = newBooks && Math.ceil(newBooks.length / perPage);
    return <>
        {
            newBooks.length ? (
                <Filter onChange={onChange} />

            ) : (<></>)
        }
        <div className="BookList">
            {
                newBooks.length ? (
                    newBooks.slice(page * perPage, (page + 1) * perPage)
                        .map((book, index) => {
                            return <BookItem {...book} key={index} />
                        })

                ) : (<></>)
            }
        </div>
        {
            newBooks.length ? (

                <Pagination numPage={numPage} />
            ) : (
                    <></>
                )
        }
    </>
}

//props = {books: [book]}s


export default BookList;