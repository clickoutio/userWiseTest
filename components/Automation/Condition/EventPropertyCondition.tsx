import React, { useState } from 'react';
import CustomSelect from 'components/CustomSelect';
import CustomInput from 'components/CustomInput';
import {
  eventProperties,
  stringOperandOptions,
} from 'components/Automation/constants';

function EventPropertyCondition() {
  const [eventProperty, setEventProperty] = useState<number>(0);
  const [stringOperand, setStringOperand] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  // @ts-ignore
  return (
    <div className="flex">
      <div className="w-4/12 mr-2">
        <CustomSelect
          name={'event_property'}
          value={eventProperty}
          onChange={(event) => {
            setEventProperty(Number.parseInt(event.target.value, 10));
          }}
        >
          <option disabled value={0} hidden>
            Select an Event Property
          </option>
          {eventProperties.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </CustomSelect>
      </div>
      <div className="w-2/12 mr-2">
        <CustomSelect
          name={'property_operand'}
          value={stringOperand}
          onChange={(event) => {
            setStringOperand(Number.parseInt(event.target.value, 10));
          }}
        >
          {stringOperandOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </CustomSelect>
      </div>
      <div className="w-6/12 mr-6">
        <CustomInput
          type={'text'}
          placeholder={'Value'}
          name={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default EventPropertyCondition;
