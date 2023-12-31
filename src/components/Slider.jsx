import React from 'react';

function Slider(props) {
    return (
        <>
            <div className="slider-active swiper-container height">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slider-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_images">
                                        <img className="back" style={{width: '55%'}}
                                             src="https://pngimg.com/d/football_boots_PNG37.png" alt=""/>
                                        <img className="top" src="assets/img/slider/text.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
}

export default Slider;