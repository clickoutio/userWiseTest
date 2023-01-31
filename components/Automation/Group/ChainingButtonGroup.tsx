import React from 'react';
import styles from './FilterGroup.module.css';

function ChainingButtonGroup({
  chainingChoice,
  setAllChaining,
  setAnyChaining,
}) {
  return (
    <>
      <div className="flex mb-4">
        <button
          className={`${styles.chainButton} ${
            chainingChoice === 'all' ? `${styles.selected}` : ''
          }`}
          onClick={setAllChaining}
        >
          All of the conditions below
        </button>
        <button
          className={`${styles.chainButton} ${
            chainingChoice === 'any' ? `${styles.selected}` : ''
          }`}
          onClick={setAnyChaining}
        >
          Any of the conditions below
        </button>
      </div>
    </>
  );
}

export default ChainingButtonGroup;
