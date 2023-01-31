import React from 'react';
import EventCondition from 'components/Automation/Condition/EventCondition';
import EventPropertyGroup from 'components/Automation/Group/EventPropertyGroup';
function EventFilter() {
  return (
    <div>
      <EventCondition />
      <EventPropertyGroup />
    </div>
  );
}

export default EventFilter;
