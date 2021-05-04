import React, { useState, useRef } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Slider from "react-slick";

import Pic1 from "../assets/images/carousal-img-1.jpg";
import Pic2 from "../assets/images/carousal-img-2.jpg";
import Pic3 from "../assets/images/carousal-img-3.jpg";
import Pic4 from "../assets/images/carousal-img-4.jpg";
import Pic5 from "../assets/images/carousal-img-5.jpg";
import Pic6 from "../assets/images/carousal-img-6.jpg";

import style from "../styles/imageCarousal.module.css";

function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <div className={`${style.icon} ${style.arrow} ${style.arrowNext}`} />
        : <div className={`${style.icon} ${style.arrow} ${style.arrowPrev}`} />;
    return (
        <span className={className} onClick={props.onClick}>
            {char}
        </span>
    );
}

const slickSettings = {
    dots: true,
    speed: 500,
    infinite: false,
    draggable: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
};

function ImageCarousel() {
    const sliderRef = useRef();
    const [SRLState, setSRLState] = useState({});

    const syncSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    }

    const callbacks = {
        onSlideChange: (slide) => { syncSlide(slide.index); setSRLState(slide) },
        onLightboxOpened: (slide) => setSRLState(slide),
        onLightboxClosed: (slide) => setSRLState(slide)
    };

    return (
        <div>
            <div className={style.headerContainer}>
                <h2 className={style.title}>Lernen Sie Kochen online</h2>
                <p className={style.text}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <SRLWrapper callbacks={callbacks}>
                <div id="container-with-slick" className={style.carouselContainer}>
                    <Slider ref={sliderRef} {...slickSettings}>
                        <div>
                            <img
                                src={Pic1}
                                alt="Hamburger1"
                                className={style.image}
                            />
                        </div>
                        <div>
                            <img
                                src={Pic2}
                                alt="Hamburger2"
                                className={style.image}
                            />
                        </div>
                        <div>
                            <img
                                src={Pic3}
                                alt="Hamburger3"
                                className={style.image}
                            />
                        </div>
                        <div>
                            <img
                                src={Pic4}
                                alt="Hamburger4"
                                className={style.image}
                            />
                        </div>
                        <div>
                            <img
                                src={Pic5}
                                alt="Hamburger5"
                                className={style.image}
                            />
                        </div>
                        <div>
                            <img
                                src={Pic6}
                                alt="Hamburger6"
                                className={style.image}
                            />
                        </div>
                    </Slider>
                </div>
            </SRLWrapper>
        </div>
    )
}

export default ImageCarousel
