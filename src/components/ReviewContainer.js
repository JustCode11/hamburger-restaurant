import React from 'react'
import CommaIcon from "../assets/icons/comma-icon.svg";

import style from "../styles/reviewContainer.module.css";

function ReviewContainer() {
    return (
        <div className={style.container}>
            <div className={style.innerContainer}>
                <div className={style.row}>
                    <div className={`${style.item} ${style.content}`}>
                        <h2 className={style.title}>Gesundheit ist das Kostbarste</h2>
                        <p className={style.text}>Während es wichtig ist, natürlich vorkommende Zucker in Ihrer Ernährung zu haben, enthalten viele Lebensmittel schädliche Zuckerzusätze, die keinen Nährwert enthalten.</p>
                        <p className={`${style.text} ${style.bottomDistance}`}>Laut einer Studie der Universität von Florida setzt das Gehirn heroinähnliche Chemikalien frei, die als endogene Opioide bezeichnet werden, wenn sich eine Person süßen, salzigen oder fetthaltigen Lebensmitteln hingibt.</p>
                        <a href="#" className={style.link}>Weiterlesen</a>
                    </div>
                    <div className={`${style.item} ${style.image} ${style.burgerPic}`}></div>
                </div>
                <div className={style.row}>
                    <div className={`${style.item} ${style.image} ${style.burgerBeerPic}`}></div>
                    <div className={`${style.item} ${style.content}`}>
                        <p className={style.fontUpperCase}>Bäckerei</p>
                        <h2 className={style.title}>Bewertung</h2>
                        <img className={style.icon} src={CommaIcon} alt="comma-icon" />
                        <p className={`${style.text} ${style.bottomDistance}`}>Wir bringen die beste Mischung der Saison aus Bio-Produkten und handgefertigten landwirtschaftlichen Produkten bequem an Ihre Haustür, indem wir lokale Bauernhöfe und Handwerker in Ihrer Nähe anbauen und mit ihnen zusammenarbeiten.</p>
                        <p className={style.fontUpperCase}>- Loo Hudson</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewContainer
