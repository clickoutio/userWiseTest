import React from 'react';
import UserPropertyCondition from 'components/Automation/Condition/UserPropertyCondition';
import UserPropertyGroup from 'components/Automation/Group/UserPropertyGroup';
function UserFilter() {
  return (
    <div>
      <UserPropertyCondition />
      <UserPropertyGroup />
    </div>
  );
}

export default UserFilter;
