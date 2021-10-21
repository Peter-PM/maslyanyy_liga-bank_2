import React, { useState } from "react";
import styles from "./header.module.scss";
import Logo from "../logo/logo";

function Header() {
  const [menuState, setMenuState] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setMenuState(true);
      window.removeEventListener("resize", handleResize);
      console.log('up')
    }
  }

  window.addEventListener("resize", handleResize);
  
  return (
    <header className={styles.header}>
      <Logo />
      {menuState ? (
        <>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  Услуги
                </a>
              </li>
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  Рассчитать кредит
                </a>
              </li>
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  Конвертер валют
                </a>
              </li>
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <a href="/" className={`${styles.link} ${styles.enter}`}>
            <svg className={styles.enter__svg} width="20" height="22">
              <use xlinkHref="../../img/icons.svg#enter"></use>
            </svg>
            <span className={styles.enter__description}>
              Войти в Интернет-банк
            </span>
          </a>
          <button
            className={`${styles.button} ${styles.button__menu}`}
            onClick={() => {
              setMenuState(!menuState);
            }}
          >
            <svg className={styles.enter__svg} width="16" height="12">
              <use xlinkHref="../../img/icons.svg#burger"></use>
            </svg>
          </button>
          <button
            className={`${styles.button} ${styles.button__close}`}
            onClick={() => setMenuState(false)}
          >
            <svg className={styles.enter__svg} width="15" height="15">
              <use xlinkHref="../../img/icons.svg#cross"></use>
            </svg>
          </button>
        </>
      ) : (
        <>
          <a href="/" className={`${styles.link} ${styles.enter__mobile}`}>
            <svg className={styles.svg__mobile} width="14" height="16">
              <use xlinkHref="../../img/icons.svg#enter"></use>
            </svg>
            <span className={styles.enter__none}>Войти в Интернет-банк</span>
          </a>
          <button
            className={`${styles.button} ${styles.button__menu}`}
            onClick={() => {
              setMenuState(!menuState);
            }}
          >
            <svg className={styles.enter__svg} width="16" height="12">
              <use xlinkHref="../../img/icons.svg#burger"></use>
            </svg>
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
