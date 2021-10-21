import React from 'react';
import styles from './main.module.scss';
import Slider from '../slider/slider';

function Main() {
  return (
    <main className={styles.main}>
      <Slider/>
    </main>
  );
}

export default Main;
