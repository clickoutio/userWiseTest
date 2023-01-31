import React from 'react';
import UserFilter from 'components/Automation/Group/UserFilter';
import useFilterGroup from 'components/Automation/useFilterGroup';
import CloseIcon from 'public/images/icons/close.svg';
import ChainingButtonGroup from './ChainingButtonGroup';
import styles from './FilterGroup.module.css';
import Image from 'next/image';
function ConditionGroup() {
  const {
    chainingChoice,
    setAnyChaining,
    setAllChaining,
    conditions,
    condition: userFilter,
    removeCondition,
    addCondition,
    setConditionObject,
    deleteConditionObject,
    isFilterGroup,
  } = useFilterGroup();
  return (
    <div>
      {isFilterGroup ? (
        <div>
          {conditions.length !== 0 && (
            <ChainingButtonGroup
              setAllChaining={setAllChaining}
              chainingChoice={chainingChoice}
              setAnyChaining={setAnyChaining}
            />
          )}
          <div className="mb-2">
            {conditions.map((obj) => (
              <div key={obj.id} className="flex mb-16">
                <div className="w-10/12">
                  <UserFilter />
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
        <div className="flex mb-4">
          <div className="w-10/12">
            <UserFilter />
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
      <div
        className={'-ml-4 ' + (userFilter === undefined ? 'flex' : 'hidden')}
      >
        <button
          className={`${styles.addButton} mr-4`}
          hidden={conditions.length}
          onClick={() => {
            setConditionObject({});
          }}
        >
          + Add User Condition
        </button>
        <button
          className={styles.addButton}
          onClick={() => {
            addCondition({ id: conditions.length + 1 });
          }}
        >
          {conditions.length
            ? '+ Add User Condition'
            : '+ Add User Condition Group'}
        </button>
      </div>
    </div>
  );
}

export default ConditionGroup;
