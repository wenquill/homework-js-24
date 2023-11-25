import React from 'react';
import styles from '../ManagedContests/ManagedContests.module.sass';
import ManagedContestsCard from './ManagedContestsCard';
import CARDS from './data';

function ManagedContests () {
  return (
    <div className={styles.container}>
      <h2>Managed Contests</h2>
      <p className={styles.description}>
        Better than a naming agency: Our hybrid-solution partners you with a
        trained Squadhelp branding consultant who will guide your crowdsourcing
        process step-by-step to get the best results possible.
      </p>
      <div className={styles.cardWrapper}>
        {CARDS.map(card => (
          <ManagedContestsCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default ManagedContests;
