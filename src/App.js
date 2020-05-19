import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import BookList from './component/BookList/BookList';
const bookURL = "https://rent-book-coderx.herokuapp.com/api/book";

const perPage = 12;

const App = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [cart, setCart] = useState(0);

  const onNumPage = (page) => setPage(page);
  useEffect(() => {
    //get all books
    getData(bookURL)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return <Router>
    <div className="App">
      <NavBar cart={cart} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/book'>
          <BookList books={books}
            perPage={perPage}
            page={page}
            onNumPage={onNumPage}
            setCart={setCart}
            cart={cart}
          />
        </Route>
      </Switch>
    </div>
  </Router>
}

const getData = async (url) => {
  return await axios.get(url)
}

export default App;
