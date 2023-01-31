import React from 'react';
import EventFilter from 'components/Automation/Group/EventFilter';
import useFilterGroup from 'components/Automation/useFilterGroup';
import ChainingButtonGroup from './ChainingButtonGroup';
import styles from './FilterGroup.module.css';
import CloseIcon from 'public/images/icons/close.svg';
import Image from 'next/image';
function UserPropertyGroup() {
  const {
    conditions,
    chainingChoice,
    setAnyChaining,
    setAllChaining,
    condition: event,
    removeCondition,
    addCondition,
    setConditionObject,
    deleteConditionObject,
    isFilterGroup,
  } = useFilterGroup();
  return (
    <div className="border-l border-black pl-4 ml-8 pt-4">
      {isFilterGroup ? (
        <div>
          {conditions.length !== 0 && (
            <ChainingButtonGroup
              chainingChoice={chainingChoice}
              setAllChaining={setAllChaining}
              setAnyChaining={setAnyChaining}
            />
          )}
          <div className="mb-4">
            {conditions.map((obj) => (
              <div key={obj.id} className="flex mb-16">
                <div className="w-11/12">
                  <EventFilter />
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
        </div>
      ) : (
        <div className="flex">
          <div className="w-11/12">
            <EventFilter />
          </div>
          <div className="w-1/12">
            <button
              className={`${styles.closeBtn} pt-4`}
              onClick={() => {
                deleteConditionObject();
              }}
            >
              <Image src={CloseIcon} alt="Remove Filter" />
            </button>
          </div>
        </div>
      )}
      <div className={`${event === undefined ? 'flex' : 'hidden'} pl-0`}>
        <button
          className={`${styles.addButton} mr-4`}
          hidden={conditions.length}
          onClick={() => {
            setConditionObject({});
          }}
        >
          + Add Event Condition
        </button>
        <button
          className={styles.addButton}
          onClick={() => {
            addCondition({ id: conditions.length + 1 });
          }}
        >
          {conditions.length
            ? '+ Add Event Condition'
            : '+ Add Event Condition Group'}
        </button>
      </div>
    </div>
  );
}

export default UserPropertyGroup;
