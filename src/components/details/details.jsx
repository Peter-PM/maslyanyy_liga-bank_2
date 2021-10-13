import React from 'react';
import styles from './details.module.scss';


function Details() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.term}>Трансмиссия</span>
        <span className={styles.description}>Роботизированная</span>
      </li>
      <li className={styles.item}>
        <span className={styles.term}>Мощность двигателя, л.с.</span>
        <span className={styles.description}>249</span>
      </li>
      <li className={styles.item}>
        <span className={styles.term}>Тип двигателя</span>
        <span className={styles.description}>Бензиновый</span>
      </li>
      <li className={styles.item}>
        <span className={styles.term}>Привод</span>
        <span className={styles.description}>Полный</span>
      </li>
      <li className={styles.item}>
        <span className={styles.term}>Объем двигателя, л</span>
        <span className={styles.description}>2.4</span>
      </li>
      <li className={styles.item}>
        <span className={styles.term}>Макс. крутящий момент</span>
        <span className={styles.description}>370/4500</span>
      </li>
      <li className={styles.item}>
        <span className={styles.term}>Количество цилиндров</span>
        <span className={styles.description}>4</span>
      </li>
    </ul>
  );
}

export default Details;
