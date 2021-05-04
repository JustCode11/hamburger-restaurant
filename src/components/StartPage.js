import React from 'react'
import { Parallax } from "react-parallax";

import style from "../styles/hamburgerRestaurant.module.css";

import img from "../assets/backgrounds/hamburger_background.jpg";
import logo from "../assets/images/restaurantLogo.png";
import arrow from "../assets/icons/arrow-fat-icon.svg";

function StartPage() {
    return (
        <Parallax bgImage={img} strength={500}>
            <div className={style.headerContainer}>
                <img src={logo} className={style.logo} alt="logo" />
                <div className={`${style.header} ${style.whiteText}`}>
                    <h2 className={style.headerTop}>Ein Schritt zu einem guten Start</h2>
                    <p className={style.headerBottom}>Mauris fermentum tortor non enim aliquet condimentum. Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In justo est, sollicitudin eu scelerisque pretium, placerat eget elit.</p>
                </div>
                <div>
                    <a href="#menuTop">
                        <img className={style.arrowDown} src={arrow} alt="arrow-icon" />
                    </a>
                </div>
            </div>
        </Parallax>
    )
}

export default StartPage
