import React from 'react';
import styles from './Tariff.module.css';

const Tariff = ({ name, price, speed, highlighted, selected, onSelect }) => {
    const handleClick = () => {
        onSelect(name);
    };

    return (
        <div 
        className={`${styles.tariff} ${highlighted ? styles.highlighted : ''} ${selected ? styles.selected : ''}`} 
        onClick={handleClick}
        >
        <div className={styles.header}>{name}</div>
        <div className={styles.price}>
            <span className={styles.priceValue}>{price}</span> руб/мес
        </div>
        <div className={styles.speed}>Скорость: {speed} Мбит/с</div>
        </div>
    );
};

export default Tariff;

