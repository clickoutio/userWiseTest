import { useMemo, useState } from 'react';

function useFilterGroup(allowFilterGroup: boolean = true) {
  const [chainingChoice, setChainingChoice] = useState<string>('any');
  const [conditions, setConditions] = useState([]);
  const [condition, setCondition] = useState(undefined);

  const isFilterGroup = useMemo(
    () => allowFilterGroup && condition === undefined,
    [allowFilterGroup, condition],
  );

  function setAnyChaining() {
    setChainingChoice('any');
  }

  function setAllChaining() {
    setChainingChoice('all');
  }

  function addCondition(_condition) {
    setConditions((prev) => [...prev, _condition]);
  }

  function removeCondition(_condition) {
    setConditions((prev) => prev.filter((c) => c.id !== _condition.id));
  }

  function setConditionObject(_condition) {
    setCondition(_condition);
  }

  function deleteConditionObject() {
    setCondition(undefined);
  }

  return {
    // Chaining Choice
    chainingChoice,
    setAnyChaining,
    setAllChaining,

    // Condition Array for a Filter Group
    conditions,
    addCondition,
    removeCondition,

    // Single Condition Object for a Filter
    condition,
    setConditionObject,
    deleteConditionObject,

    // Is Filter Group or not
    isFilterGroup,
  };
}

export default useFilterGroup;
