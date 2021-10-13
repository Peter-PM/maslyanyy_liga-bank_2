import React from 'react';
import styles from './info.module.scss';

function Info() {

  return (
    <section className={styles.info}>
      <h1 className={styles.title}>Марпех 11</h1>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.item1}`}>бензин</li>
        <li className={`${styles.item} ${styles.item2}`}>механика</li>
        <li className={`${styles.item} ${styles.item3}`}>100 л.с.</li>
        <li className={`${styles.item} ${styles.item4}`}>2.4 л</li>
      </ul>
      <p className={styles.price}><span className={styles.actualPrice}>2 300 000 ₽</span> <span className={styles.oldPrice}>2&ensp;400 000 ₽</span></p>
      <button className={styles.button}>Оставить заявку</button>
      <a className={styles.link} href="/">В кредит от 11 000 ₽</a>
    </section>
  );
}

export default Info;