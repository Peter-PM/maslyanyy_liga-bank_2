import React from 'react';
import styles from './footer.module.scss';
import Logo from '../logo/logo';


function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__section}>
        <Logo/>
        <p className={`${styles.address} ${styles.description}`}>
          150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019
        </p>
      </section>
      <nav className={styles.footer__section}>
        <ul>
          <li className={styles.item}><a className={styles.link} href="/">     Услуги</a></li>
          <li className={styles.item}><a className={styles.link} href="/">     Рассчитать кредит</a></li>
          <li className={styles.item}><a className={styles.link} href="/">     Контакты</a></li>
          <li className={styles.item}><a className={styles.link} href="/">     Задать вопрос</a></li>
        </ul>
      </nav>
      <section className={styles.footer__section}>
        <a href="tel:*0904" className={styles.phone}>*0904</a>
        <span className={styles.description}>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</span>
      </section>
      <section className={styles.footer__section}>
        <a href="tel:88001112233" className={styles.phone}>8 800 111 22 33</a>
        <span className={styles.description}>Бесплатный для всех городов России</span>
      </section>
      <section className={styles.footer__section}>
        <ul className={styles.social__list}>
          <li className={styles.social__item}>
            <a className={styles.social__link} href="/">
              <svg width="9" height="16">
                <use xlinkHref="../../img/icons.svg#facebook"></use>
              </svg>
            </a>
          </li>
          <li className={styles.social__item}>
            <a className={styles.social__link} href="/">
              <svg width="16" height="16">
              <use xlinkHref="../../img/icons.svg#insta"></use>
              </svg>
            </a>
          </li>
          <li className={styles.social__item}>
            <a className={styles.social__link} href="/">
              <svg width="16" height="13">
              <use xlinkHref="../../img/icons.svg#twitter"></use>
              </svg>
            </a>
          </li>
          <li className={styles.social__item}>
            <a className={styles.social__link} href="/">
              <svg width="16" height="13">
              <use xlinkHref="../../img/icons.svg#yuotube"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
