import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.scss';
import Details from '../details/details';
import Comments from '../comments/comments';
import Contacts from '../contacts/contacts';
import { clickEnter } from '../../utils/constants';

const Tab = {
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
  CONTACTS: 'Contacts',
};

function Tabs({setView, newCommentary}) {

  const renderTab = (tab) => {
    switch (tab) {
      case Tab.REVIEWS:
        return <Comments 
                setView={setView}
                newCommentary={newCommentary}
              />;
      case Tab.CONTACTS:
        return <Contacts/>;
      default:
        return <Details/>;
    };
  };

  const [activeTab, setActiveTab] = useState(Tab.DETAILS);

  const hangleTabPressEnter = (evt, tab) => {
    if (clickEnter(evt)) {
      evt.preventDefault();
      setActiveTab(tab);
    };
  };
  
  return (
    <section className={styles.tabs}>
      <ul className={styles.list}>
        <li
          className={`${styles.item} ${activeTab === Tab.DETAILS && styles.itemActive}`}
          tabIndex="0"
          onKeyPress={(evt)=>{hangleTabPressEnter(evt, Tab.DETAILS)}}
          onClick={()=>{setActiveTab(Tab.DETAILS)}}
        >
          Характеристики
        </li>
        <li
          className={`${styles.item} ${activeTab === Tab.REVIEWS && styles.itemActive}`}
          tabIndex="0"
          onKeyPress={(evt)=>{hangleTabPressEnter(evt, Tab.REVIEWS)}}
          onClick={()=>{setActiveTab(Tab.REVIEWS)}}
         >
           Отзывы
        </li>
        <li
          className={`${styles.item} ${activeTab === Tab.CONTACTS && styles.itemActive}`}
          tabIndex="0"
          onKeyPress={(evt)=>{hangleTabPressEnter(evt, Tab.CONTACTS)}}
          onClick={()=>{setActiveTab(Tab.CONTACTS)}}
        >
          Контакты
        </li>
      </ul>
      {renderTab(activeTab)}
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

export default Tabs;