import React from 'react';
import styles from './ManagedContests.module.sass';

function ManagedContestsCard ({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div>
          <img src={card.icon} alt='card' />
        </div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
}

export default ManagedContestsCard;
