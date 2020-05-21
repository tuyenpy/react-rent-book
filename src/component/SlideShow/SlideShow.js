import React from 'react';
import './SlideShow.css';
import slide01 from './01.jpg';

const SlideShow = (props) => {
    return <div className="SlideShow">
        <img src={slide01} alt=""/>
    </div>
}

export default SlideShow;