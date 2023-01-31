import React, { useState } from 'react';
import CustomSelect from 'components/CustomSelect';
import CustomInput from 'components/CustomInput';
import {
  occurrenceOperators,
  eventOptions,
  quantityOptions,
  timeOperators,
} from 'components/Automation/constants';

function EventCondition() {
  const [event, setEvent] = useState<number>(0);
  const [quantityOption, setQuantityOption] = useState<number>(
    quantityOptions[0].id,
  );
  const [quantity, setQuantity] = useState<number>(0);
  const [occurrenceType, setOccurrenceType] = useState<number>(
    occurrenceOperators[0].id,
  );
  const [timeQuantity, setTimeQuantity] = useState<number>(0);
  const [timeOperator, setTimeOperator] = useState<number>(timeOperators[0].id);
  const [since, setSince] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  return (
    <div>
      <div className="flex">
        <div className="w-2/12 mr-2">
          <CustomSelect name="event_performed">
            <option value={''}>Performed An Event</option>
          </CustomSelect>
        </div>
        <div className="w-2/12 mr-2">
          <CustomSelect
            value={event}
            name="event"
            onChange={(event) => {
              setEvent(Number.parseInt(event.target.value, 10));
            }}
          >
            <option value={0} hidden disabled>
              Select an Event
            </option>
            {eventOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </CustomSelect>
        </div>
        <div className="w-1/12 mr-2">
          <CustomSelect
            value={quantityOption}
            name="quantity_type"
            onChange={(event) => {
              setQuantityOption(Number.parseInt(event.target.value, 10));
            }}
          >
            {quantityOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </CustomSelect>
        </div>
        <div className="flex items-center w-1/12 mr-2">
          <CustomInput
            type={'number'}
            name="quantity"
            value={quantity}
            onChange={(event) => {
              setQuantity(Number.parseInt(event.target.value, 10));
            }}
          />
          <span style={{ marginLeft: '0.18rem' }}>times</span>
        </div>
        <div className="w-2/12">
          <CustomSelect
            type="number"
            name={'occurrence_operator'}
            onChange={(e) => {
              setOccurrenceType(parseInt(e.target.value, 10));
            }}
          >
            {occurrenceOperators.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </CustomSelect>
        </div>

        <div className="w-4/12 mr-6">
          {occurrenceType === occurrenceOperators[1].id && (
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 2, marginLeft: '1em' }}>
                <CustomInput
                  type={'number'}
                  name={'time'}
                  value={timeQuantity}
                  onChange={(event) => {
                    setTimeQuantity(Number.parseInt(event.target.value, 10));
                  }}
                />
              </div>
              <div style={{ flex: 10, marginLeft: '1em', marginRight: '1em' }}>
                <CustomSelect
                  name={'time_operator'}
                  value={timeOperator}
                  onChange={(event) => {
                    setTimeOperator(Number.parseInt(event.target.value, 10));
                  }}
                >
                  {timeOperators.map((opt) => (
                    <option value={opt.id} key={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </CustomSelect>
              </div>
            </div>
          )}
          {occurrenceType === occurrenceOperators[2].id && (
            <div
              style={{ marginLeft: '1em', marginRight: '1em', width: '50%' }}
            >
              <CustomInput
                type={'date'}
                name={'since'}
                value={since}
                onChange={(event) => {
                  setSince(event.target.value);
                }}
              />
            </div>
          )}
          {occurrenceType === occurrenceOperators[3].id && (
            <div
              style={{ display: 'flex', marginLeft: '1em', marginRight: '1em' }}
            >
              <div style={{ flex: 1 }}>
                <CustomInput
                  type={'date'}
                  name={'startDate'}
                  value={startDate}
                  onChange={(event) => {
                    setStartDate(event.target.value);
                  }}
                />
              </div>
              <div style={{ flex: 1, marginLeft: '1em' }}>
                <CustomInput
                  type={'date'}
                  name={'endDate'}
                  value={endDate}
                  onChange={(event) => {
                    setEndDate(event.target.value);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCondition;
