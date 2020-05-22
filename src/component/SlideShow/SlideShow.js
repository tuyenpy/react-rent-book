import React, { useState } from 'react';
import './SlideShow.css';
import slide01 from './01.jpg';
import slide02 from './02.jpg';
import slide03 from './03.jpg';
import slide04 from './04.jpg';
import slide05 from './05.jpg';
import slide06 from './06.jpg';
import slide07 from './07.jpg';
import prev from './prev.svg';
import next from './next.svg';

const images = [
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06,
    slide07,
]  

const SlideShow = (props) => {
    let [state, setState] = useState(0);
    let onSlide = (slide) => {
        if (slide < 0) {
            setState(images.length-1);
            return;
        }
        if (slide > images.length -1) {
            setState(0);
            return;
        }
        setState(slide);
    }
    return <div className="SlideShow">
        <img src={prev} alt="prev" className="prev" onClick={() => onSlide(state - 1)}/>
        <img src={images[state]} alt="slide" className="slide"/>
        <img src={next} alt="next" className="next" onClick={() => onSlide(state + 1)}/>
    </div>
}

export default SlideShow;