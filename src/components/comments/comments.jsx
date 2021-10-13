import React from 'react';
import PropTypes from 'prop-types';
import styles from './comments.module.scss';
import Stars from '../stars/stars';
import AddComment from '../add-comment/add-comment';

const RATING_STARS = 3;

function Comments({setView, newCommentary}) {

  return (
    <section className={styles.comments}>
      <button
        className={styles.review}
        type="button"
        onClick={()=>{setView(true)}}
      >
        Оставить отзыв
      </button>
      <article className={styles.comment}>
        <p className={styles.user}>Борис Иванов</p>
        <dl className={styles.list}>
          <dt className={`${styles.term} ${styles.term_plus} ${styles.decoration}`}>Достоинства</dt>
          <dd className={`${styles.item} ${styles.decoration}`}>мощность, внешний вид</dd>
          <dt className={`${styles.term} ${styles.term_minus} ${styles.decoration}`}>Недостатки</dt>
          <dd className={`${styles.item} ${styles.decoration}`}>Слабые тормозные колодки (пришлось заменить)</dd>
          <dt className={styles.term}>Комментарий</dt>
          <dd className={styles.item}>Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</dd>
        </dl>
        <div className={styles.assessment}>
          <Stars
          star={RATING_STARS}
          />
          <span className={styles.recommendation}>Советует</span>
        </div>
        <div className={styles.feedback}>
          <span className={styles.time}>1 минуту назад</span>
          <a href="#" className={styles.reply}>Ответить</a>
        </div>
      </article>
      <article className={styles.comment}>
        <p className={styles.user}>Марсель Исмагилов</p>
        <dl className={styles.list}>
          <dt className={`${styles.term} ${styles.term_plus} ${styles.decoration}`}>Достоинства</dt>
          <dd className={`${styles.item} ${styles.decoration}`}>Cтиль, комфорт, управляемость</dd>
          <dt className={`${styles.term} ${styles.term_minus} ${styles.decoration}`}>Недостатки</dt>
          <dd className={`${styles.item} ${styles.decoration}`}>Дорогой ремонт и обслуживание</dd>
          <dt className={styles.term}>Комментарий</dt>
          <dd className={styles.item}>Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</dd>
        </dl>
        <div className={styles.assessment}>
          <Stars
          star={RATING_STARS}
          />
          <span className={styles.recommendation}>Советует</span>
        </div>
        <div className={styles.feedback}>
          <span className={styles.time}>1 минуту назад</span>
          <a href="#" className={styles.reply}>Ответить</a>
        </div>
      </article>
      {newCommentary.name ? (<AddComment
        commentary={newCommentary}
      />) : ('')}
    </section>
  );
}

Comments.propTypes = {
  setView: PropTypes.func.isRequired,
  newCommentary: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      advantages: PropTypes.string.isRequired,
      limitations: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  ]).isRequired,
};

export default Comments;
