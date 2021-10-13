import React from 'react';
import Iframe from 'react-iframe';
import styles from './contacts.module.scss';

function Contacts() {
  return (
    <section className={styles.contacts}>
      <dl className={styles.list}>
        <dt className={styles.term}>Aдрес</dt>
        <dd className={styles.item}>
          Санкт-Петербург,
          набережная&nbsp;реки&nbsp;Карповки,&nbsp;дом&nbsp;5
        </dd>
        <dt className={styles.term}>Режим работы</dt>
        <dd className={styles.item}>
        Ежедневно, с 10:00 до 21:00
        </dd>
        <dt className={styles.term}>Телефон</dt>
        <dd className={styles.item}>
        <a href="tel:88003335599">8 (800) 333-55-99</a>
        </dd>
        <dt className={styles.term}>E-mail</dt>
        <dd className={styles.item}>
        <a href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
          
        </dd>
      </dl>
      <div className={styles.map}>
        <Iframe 
          title="Karpovka district"
          className={styles.mapImage}
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3993.677443548458!2d30.322857708589304!3d59.967998703054626!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1632166851421!5m2!1sru!2sru"
          width="431"
          height="271"
          allowfullscreen="fullscreen"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Contacts;
