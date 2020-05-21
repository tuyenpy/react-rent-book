import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import './App.css';
import AppContext from './Context/AppContext';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import BookList from './component/BookList/BookList';
import Transaction from './component/Transaction/Transaction';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';

const bookURL = "https://rent-book-coderx.herokuapp.com/api/book";
const userURL = "https://rent-book-coderx.herokuapp.com/api/user/profile";
const perPage = 12;

const App = (props) => {
  //retrive cookies from Cookies Provider
  let { cookies } = props;
  //books downloaded from the API are saved here
  const [books, setBooks] = useState([]);
  //retrieve user information when querying for cookies
  const [user, setUser] = useState({});

  const [page, setPage] = useState(0);

  const [cart, setCart] = useState(0);
  //book page transfer function
  const onNumPage = (page) => setPage(page);
  
  //pass values into the context
  const value = {
    onNumPage,
    cart,
    setCart, 
    books,
    perPage,
    page,
    cookies,
    user,
  }

  //get all books
  useEffect(() => {
    getData(bookURL)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);
  
  //get user information
  useEffect(() => {
    axios.get(userURL, {
      params: {userID: cookies.get('userID')}
    })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  },)

  return <Router>
    <AppContext.Provider value={value}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/book'>
            <BookList />
          </Route>
          <Route path='/transaction'>
            <Transaction />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </div>

    </AppContext.Provider>
  </Router>
}

// get data
const getData = async (url) => {
  return await axios.get(url)
}

export default withCookies(App);
