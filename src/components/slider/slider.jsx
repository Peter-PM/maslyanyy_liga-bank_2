import React, { useState, useEffect } from "react";
import styles from './slider.module.scss';
import SlideOne from "../slides/slide-1";
import SlideTwo from "../slides/slide-2";
import SlideThree from "../slides/slide-3";

function Slider() {

  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [<SlideOne/>,<SlideTwo/>,<SlideThree/>];

  const slider = () => slides[activeIndex];

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) => {
        const res = current === slides.length - 1 ? 0 : current + 1
        return res
    })
    }, 5000)
    return () => clearInterval()
  }, [])
 
  return (
    <section className={styles.slider}>
      {slider()}
      <div className={styles.crumbs}>
        <span className={`${activeIndex+1 === 1 ? styles.crumb__active : ''} ${styles.crumb}`}></span>
        <span className={`${activeIndex+1 === 2 ? styles.crumb__active : ''} ${styles.crumb}`}></span>
        <span className={`${activeIndex+1 === 3 ? styles.crumb__active : ''} ${styles.crumb}`}></span>
      </div>
    </section>
  );  
}

export default Slider;
