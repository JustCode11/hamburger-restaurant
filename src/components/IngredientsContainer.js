import React from 'react'
import HamburgerIcon from "../assets/icons/hamburger-icon.svg";
import MeatIcon from "../assets/icons/meat-icon.svg";
import ChickenIcon from "../assets/icons/chicken-icon.svg";
import VegetableIcon from "../assets/icons/vegetable-icon.svg";
import BeerIcon from "../assets/icons/beer-icon.svg";
import CoffeeIcon from "../assets/icons/coffee-icon.svg";

import style from "../styles/ingredientsContainer.module.css";

function IngredientsContainer() {
    return (
        <div className={style.container}>
            <div className={style.fullIconContainer}>
                <div className={style.iconContainer}>
                    <div className={style.iconItem}>
                        <img src={HamburgerIcon} className={style.icon} alt="hamburger-icon" />
                        <p className={style.whiteText}>Hamburger</p>
                    </div>
                    <div className={style.iconItem}>
                        <img src={MeatIcon} className={style.icon} alt="meat-icon" />
                        <p className={style.whiteText}>Bestes Rindfleisch</p>
                    </div>
                    <div className={style.iconItem}>
                        <img src={ChickenIcon} className={style.icon} alt="chicken-icon" />
                        <p className={style.whiteText}>Geflügel</p>
                    </div>
                </div>
                <div className={style.iconContainer}>
                    <div className={style.iconItem}>
                        <img src={VegetableIcon} className={style.icon} alt="vegetable-icon" />
                        <p className={style.whiteText}>Frisches Gemüse</p>
                    </div>
                    <div className={style.iconItem}>
                        <img src={BeerIcon} className={style.icon} alt="beer-icon" />
                        <p className={style.whiteText}>Lagerbier</p>
                    </div>
                    <div className={style.iconItem}>
                        <img src={CoffeeIcon} className={style.icon} alt="coffee-icon" />
                        <p className={style.whiteText}>Frischer Kaffee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IngredientsContainer
