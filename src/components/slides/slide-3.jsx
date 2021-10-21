import React from 'react';
import styles from './slide-3.module.scss';


function SlideThree() {
  return (
    <section className={styles.promo}>
      <div className={styles.wrapperRight}>
        <p className={styles.title}>Лига Банк</p>
        <span className={styles.description}>Всегда рядом</span>
        <a href="/" className={styles.link}>Найти отделение</a>
      </div>
    </section>
  );
}

export default SlideThree;
