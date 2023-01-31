import React from 'react';
import EventPropertyCondition from 'components/Automation/Condition/EventPropertyCondition';
import useFilterGroup from 'components/Automation/useFilterGroup';
import ChainingButtonGroup from './ChainingButtonGroup';
import styles from './FilterGroup.module.css';
import CloseIcon from '../../../public/images/icons/close.svg';
import Image from 'next/image';

function EventPropertyGroup() {
  const {
    conditions: propertyConditions,
    addCondition,
    removeCondition,
    chainingChoice,
    setAllChaining,
    setAnyChaining,
  } = useFilterGroup();
  return (
    <div className="border-l border-black pl-4 ml-8 pt-4">
      {propertyConditions.length !== 0 && (
        <ChainingButtonGroup
          chainingChoice={chainingChoice}
          setAnyChaining={setAnyChaining}
          setAllChaining={setAllChaining}
        />
      )}
      <div className="mb-4">
        {propertyConditions.map((obj) => (
          <div key={obj.id} className="flex mb-4">
            <div className="w-11/12">
              <EventPropertyCondition />
            </div>
            <div className="w-1/12">
              <button
                className={`${styles.closeBtn} pt-4`}
                onClick={() => {
                  removeCondition(obj);
                }}
              >
                <Image src={CloseIcon} alt="Remove Filter" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          className={styles.addButton}
          onClick={() => {
            addCondition({ id: propertyConditions.length + 1 });
          }}
        >
          + Add condition based on event properties
        </button>
      </div>
    </div>
  );
}

export default EventPropertyGroup;
