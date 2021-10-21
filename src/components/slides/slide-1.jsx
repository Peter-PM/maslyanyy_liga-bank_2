import React from 'react';
import styles from './slide-1.module.scss';


function SlideOne() {
  return (
    <section className={styles.promo}>
      <div className={styles.wrapperRight}>
        <p className={styles.title}>Лига Банк</p>
        <span className={styles.description}>Кредиты на любой случай</span>
        <a href="/" className={styles.link}>Рассчитать кредит</a>
      </div>
      <div className={styles.wrapperLeft}>
        <div className="promo__card"></div>
      </div>
    </section>
  );
}

export default SlideOne;
