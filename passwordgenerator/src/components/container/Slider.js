import React from 'react';
import './Slider.css';
const Slider = () => {
    return (
        <div className="slider-container">
            <input type="range" min={min} max={max} value={value} step={step} class="slider"/>
        </div>
    );  
}
export default Slider;