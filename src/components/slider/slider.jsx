import React, { useState } from 'react';
import styles from './slider.module.scss';
import arrow from '../../image/arrow.svg'
import arrowOff from '../../image/arrow-off.svg'
import { FIRST_FOTO, LAST_FOTO } from '../../utils/constants';


function Slider() {

  const [count, setCount] = useState(1);

  const IMAGE_ACTIVE_NUMBERS = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
  }

  return (
    <section className={styles.slider}>
      <div className={styles.image_container}>
        <img className={styles.main_image} src={`../image/desktop-slide-${count}.png`} srcSet={`../image/desktop-slide-${count}-2x.png 2x`} alt="Внешний вид машины" width="600" height="375"/>
      </div>
      <div className={styles.preview}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonLeft}`}
          onClick={() => {setCount(count-1)}}
          disabled={count === FIRST_FOTO ? true : false }>
          <img src={count === FIRST_FOTO ? arrowOff : arrow } width="20" height="13" alt="Стрелочка влево"/>
        </button>
        <ul className={styles.images}>
          <li>
            <img className={`${count === IMAGE_ACTIVE_NUMBERS.ONE && styles.active__images}`} src="../image/desktop-slide-1-min.png" alt="Первая фотография" width="128" height="80"/>
          </li>
          <li>
            <img className={`${count === IMAGE_ACTIVE_NUMBERS.TWO && styles.active__images}`} src="../image/desktop-slide-2-min.png" alt="Вторая фотография" width="128" height="80"/>
          </li>
          <li>
            <img className={`${count === IMAGE_ACTIVE_NUMBERS.THREE && styles.active__images}`} src="../image/desktop-slide-3-min.png" alt="Третья фотография" width="128" height="80"/>
          </li>
        </ul>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonRight}`}
          onClick={() => {setCount(count+1)}}
          disabled={count === LAST_FOTO ? true : false }>
          <img src={count === LAST_FOTO ? arrowOff : arrow } width="20" height="13" alt="Стрелочка вправо"/>
        </button>
      </div>
    </section>
  );
}

export default Slider;