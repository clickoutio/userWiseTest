import React, { useState } from 'react';
import CustomSelect from 'components/CustomSelect';
import CustomInput from 'components/CustomInput';
import {
  userProperties,
  stringOperandOptions,
} from 'components/Automation/constants';

function UserPropertyCondition() {
  const [property, setProperty] = useState<number>(0);
  const [operand, setOperand] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  // @ts-ignore
  return (
    <div className="flex">
      <div className="w-2/12 mr-2">
        <CustomSelect name="user_property">
          <option value={'user_property'}>User Property</option>
        </CustomSelect>
      </div>
      <div className="w-4/12 mr-2">
        <CustomSelect
          name={'user_property_value'}
          placeholder={'Select User Property'}
          value={property}
          onChange={(event) => {
            setProperty(Number.parseInt(event.target.value, 10));
          }}
        >
          <option value={0} hidden disabled>
            Select a User Property
          </option>
          {userProperties.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </CustomSelect>
      </div>
      <div className="w-2/12 mr-2">
        <CustomSelect
          value={operand}
          onChange={(event) => {
            setOperand(Number.parseInt(event.target.value, 10));
          }}
        >
          {stringOperandOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </CustomSelect>
      </div>
      <div className="w-4/12 mr-6">
        <CustomInput
          placeholder={'Your Email'}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default UserPropertyCondition;
