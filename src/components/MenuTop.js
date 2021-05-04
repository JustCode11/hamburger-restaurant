import React, { useState, useEffect } from 'react'
import style from "../styles/menuTop.module.css";

function MenuTop() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('menu.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (res) {
                console.log('res: ', res);
                return res.json();
            })
            .then(function (myJson) {
                console.log('myJson: ', myJson);
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <div className={style.container} id="menuTop">
            <div className={style.headerContainer}>
                <p className={style.firstHeader}>UNSER MENÜ</p>
                <h2 className={style.secondHeader}>Köstlich vom Küchenchef</h2>
            </div>
            <div className={style.bottomContainer}>
                {data && data.map((item, index) => {
                    return (
                        <div key={index} className={style.menuItem}>
                            <p className={style.menuItemHeader}>{item.menu} / {item.price} €</p>
                            <p>{item.ingredients && item.ingredients.map((ing, index2) => {
                                return (
                                    item.ingredients.length > (index2 + 1) ?
                                        <span key={index2}>{ing.name} / </span> :
                                        <span key={index2}>{ing.name}</span>
                                )
                            })}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MenuTop
