import React from 'react';
import styles from './ManagedContests.module.sass';

function ManagedContestsCard ({ card }) {
  const { icon, title, description } = card;

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div>
          <img src={icon} alt='card' />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ManagedContestsCard;
