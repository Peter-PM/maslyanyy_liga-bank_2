import React from 'react';
import PropTypes from 'prop-types';
import styles from './add-comment.module.scss';
import Stars from '../stars/stars';
import { MIN_STARS_FOR_RECOMENDATION } from '../../utils/constants';

function AddComment({commentary}) {

  return (
    <article className={styles.comment}>
        <p className={styles.user}>{commentary.name}</p>
        <dl className={styles.list}>

          {commentary.advantages ? (
            <>
              <dt className={`${styles.term} ${styles.term_plus} ${styles.decoration}`}>Достоинства</dt>
              <dd className={`${styles.item} ${styles.decoration}`}>{commentary.advantages}</dd>
            </>
          ) : (
            ''
          )}

          {commentary.limitations ? (
            <>
              <dt className={`${styles.term} ${styles.term_minus} ${styles.decoration}`}>Недостатки</dt>
              <dd className={`${styles.item} ${styles.decoration}`}>{commentary.limitations}</dd>
            </>
          ) : (
            ''
          )}         

          <dt className={styles.term}>Комментарий</dt>
          <dd className={styles.item}>{commentary.comment}</dd>

        </dl>
        <div className={styles.assessment}>
          <Stars
          star={commentary.rating}
          />
          <span className={styles.recommendation}>{commentary.rating >= MIN_STARS_FOR_RECOMENDATION ? 'Советует' : ''}</span>
        </div>
        <div className={styles.feedback}>
          <span className={styles.time}>{commentary.date}</span>
          <a href="#" className={styles.reply}>Ответить</a>
        </div>
      </article>
  );
}

AddComment.propTypes = {
  commentary: PropTypes.shape({
    name: PropTypes.string.isRequired,
    advantages: PropTypes.string,
    limitations: PropTypes.string,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number]),
  }),
};
  
export default AddComment;