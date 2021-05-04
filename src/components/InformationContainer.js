import React from 'react'

import style from "../styles/informationContainer.module.css";

function InformationContainer() {
    return (
        <div className={style.container}>
            <div className={style.innerContainer}>
                <div className={style.row}>
                    <div className={`${style.itemContainer} ${style.picture} ${style.burgerPic}`}>
                    </div>
                    <div className={`${style.itemContainer} ${style.content}`}>
                        <p className={style.header}>Geschichte</p>
                        <h2 className={style.title}>Seltsame Geschichte über die Entstehung gesunder Lebensmittel</h2>
                        <p className={style.text}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <a href="#" className={style.link}>Weiterlesen</a>
                    </div>
                    <div className={`${style.itemContainer} ${style.picture} ${style.saladPic}`}>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={`${style.itemContainer} ${style.content}`}>
                        <p className={style.header}>Gemeinschaft</p>
                        <h2 className={style.title}>Gesundes Essen in sozialen Netzwerken, bei uns interessant</h2>
                        <p className={style.text}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <a href="#" className={style.link}>Weiterlesen</a>
                    </div>
                    <div className={`${style.itemContainer} ${style.picture} ${style.beefPic}`}>
                    </div>
                    <div className={`${style.itemContainer} ${style.content}`}>
                        <p className={style.header}>Philosophie</p>
                        <h2 className={style.title}>Nur das beste Essen, die besten Musiker die besten Gäste</h2>
                        <p className={style.text}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <a href="#" className={style.link}>Weiterlesen</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationContainer
