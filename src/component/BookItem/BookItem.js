import React, { useContext } from 'react';
import './BookItem.css';
import AppContext from '../../Context/AppContext';

const BookItem = (props) => {
    let { image, title, description, author, price } = props;
    let { cart, setCart } = useContext(AppContext);
    return <div className="BookItem">
        <div className="BookItem-image">
            <img src={image} alt="" />
        </div>
        <div className="BookItem-body">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="author">
                <p>{author}</p>
            </div>
            <div className="price">
                <p>{price}</p>
            </div>
        </div>
        <div className="BookItem-btn">
            <button onClick={() => setCart(cart + 1)}>Add to cart</button>
        </div>
    </div>
}
// props = {image, title, description, author, price}

export default BookItem;