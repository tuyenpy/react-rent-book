import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BookItem from './component/BookItem/BookItem';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          image: "https://loremflickr.com/320/240",
          title: "Hatari!",
          description: "Laceration with foreign body of left back wall of thorax without penetration into thoracic cavity, subsequent encounter"
        }
      ]
    };
  }

  render() {
    let { books } = this.state;
    return <div className="App">
      <Container>
        {
          books.map((book, index) => {
            return <BookItem book={book} key={index} />
          })
        }

      </Container>
    </div>
  }
}

export default App;
