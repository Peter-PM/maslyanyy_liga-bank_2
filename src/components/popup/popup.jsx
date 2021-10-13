import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import styles from './popup.module.scss';
import RatingStar from '../review-star/rating-star';
import { clickEsc } from '../../utils/constants';
const FocusTrap = require('focus-trap-react');


function Popup({viewPopup, setView, setNewCommentary}) {

  const storageComment = localStorage.commentDraft ? JSON.parse(localStorage.commentDraft) : false ;

  const [name, setName] = useState(storageComment.name || '');
  const [advantages, setAdvantages] = useState(storageComment.advantages || '');
  const [limitations, setLimitations] = useState(storageComment.limitations || '');
  const [comment, setComment] = useState(storageComment.comment || '');
  const [rating, setRating] = useState(storageComment.rating || '');
  const [nameValid, setNameValid] = useState(true);
  const [commentValid, setCommentValid] = useState(true);

  const commentary = {
    name: name,
    advantages: advantages,
    limitations: limitations,
    comment: comment,
    rating: rating,
    date: dayjs().format('HH:MM DD mmmm'),
  };
  
  const validationName = (text) => text.length !== 0 ? setNameValid(true) : setNameValid(false);
  const validationComment = (text) => text.length !== 0 ? setCommentValid(true) : setCommentValid(false);

  const handleNameChange = (evt) => {
    evt.preventDefault();
    validationName(evt.target.value);
    setName(evt.target.value)
  }

  const handleCommentChange = (evt) => {
    evt.preventDefault();
    validationComment(evt.target.value);
    setComment(evt.target.value);
  }

  const saveComment = async () => {
    localStorage.commentDraft = JSON.stringify(commentary);
    await setNewCommentary(commentary);
    localStorage.removeItem('commentDraft');
  }

  const hadlePublishComment = () => {
    if (name.length && comment.length) {
      saveComment();
      setView(false);
      setName('');
      setAdvantages('');
      setLimitations('');
      setComment('');
      setRating('');
    } else {
      validationName(name);
      validationComment(comment);
    };
  };

  const handleClosePopup = () => {
    setView(false);
    localStorage.commentDraft = JSON.stringify(commentary);
  };
    
  const handleEscKeyDown = (evt) => {
    if (clickEsc(evt)) {
      evt.preventDefault();
      handleClosePopup();
      document.removeEventListener('keydown', handleEscKeyDown);
    }
  };

  useEffect(()=> {
    document.querySelector('body').addEventListener('keydown', handleEscKeyDown);
    !localStorage.commentDraft ?? localStorage.setItem('commentDraft', JSON.stringify(commentary));
  });

  useEffect(()=> {
    document.querySelector('body').style.overflow = viewPopup ? "hidden" : "visible" ;
  }, [viewPopup]);

  return (
    <>
      {viewPopup ? (
        <FocusTrap>
          <section
            className={`${viewPopup ? styles.container : styles.popupOff}`}
            onClick={handleClosePopup}
          >
            <section
              className={styles.popup}
              onClick={(evt) => evt.stopPropagation()}
            >
              <h2 className={styles.title}>Оставить отзыв</h2>
              <button
                className={styles.close}
                type="button"
                onClick={handleClosePopup}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z"
                    fill="#9F9E9E"
                  />
                </svg>
              </button>
              <form className={styles.form} action="post">
                <label className={`${nameValid ? styles.name : styles.name_error}`} htmlFor="name">
                  {nameValid ? '' : "Пожалуйста, заполните поле"}
                </label>
                <input
                  className={`${styles.input} ${nameValid ? '' : styles.input_error}`}
                  type="text"
                  id="name"
                  placeholder="Имя"
                  autoFocus
                  value={name}
                  onChange={(evt) => {handleNameChange(evt)}}
                />

                <div className={styles.grade}>
                  <span>Оцените товар: </span>
                  <RatingStar
                    rating={rating}
                    setRating={setRating}
                  />
                </div>

                <label className={styles.hidden} htmlFor="advantages">
                  Достоинства
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Достоинства"
                  id="advantages"
                  value={advantages}
                  onChange={(evt) => setAdvantages(evt.target.value)}
                />

                <label className={styles.hidden} htmlFor="limitations">
                  Недостатки
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="limitations"
                  placeholder="Недостатки"
                  value={limitations}
                  onChange={(evt) => setLimitations(evt.target.value)}
                />

                <label className={`${commentValid ? styles.comment : styles.comment_error}`} htmlFor="review">
                  {commentValid ? '' : "Пожалуйста, заполните поле"}
                </label>
                <textarea
                  className={`${styles.area} ${commentValid ? '' : styles.input_error}`}
                  name="review"
                  id="review"
                  placeholder="Комментарий"
                  value={comment}
                  onChange={(evt) => {handleCommentChange(evt)}}
                ></textarea>

                <button
                  className={styles.button}
                  type="button"
                  onClick={hadlePublishComment}
                >
                  Оставить отзыв
                </button>
              </form>
            </section>
          </section>
        </FocusTrap>
      ) : (
        false
      )}
    </>
  );
}

Popup.propTypes = {
  viewPopup: PropTypes.bool.isRequired,
  setView: PropTypes.func.isRequired,
  setNewCommentary: PropTypes.func.isRequired,
};

export default Popup;
