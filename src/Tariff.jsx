import React from 'react';
import styles from './Tariff.module.css';

const Tariff = ({ name, price, speed, highlighted }) => {
return (
    <div className={`${styles.tariff} ${highlighted ? styles.highlighted : ''}`}>
        <div className={styles.header}>{name}</div>
        <div className={styles.price}>
            <span>руб </span>
            <span className={styles.priceValue}>{price}</span>
            <span>/мес</span>
        </div>
        <div className={styles.speed}>до {speed} Мбит/сек</div>
        <div className={styles.unlimited}>Объем включенного трафика не ограничен</div>
    </div>
);
};

export default Tariff;
