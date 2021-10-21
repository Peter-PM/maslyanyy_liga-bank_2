import React from 'react';
import styles from './slide-2.module.scss';


function SlideTwo() {
  return (
    <section className={styles.promo}>
      <div className={styles.wrapperRight}>
        <p className={styles.title}>Лига Банк</p>
        <span className={styles.description}>Ваша уверенность в завтрашнем дне</span>
      </div>
    </section>
  );
}

export default SlideTwo;
