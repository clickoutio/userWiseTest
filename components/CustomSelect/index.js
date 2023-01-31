import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles, { caret } from './select.module.css';
import CaretIcon from 'public/images/icons/caret.inline.svg';

const Select = forwardRef(
  ({ label, error, onChange, className, children, ...props }, ref) => {
    const { id } = props;

    const emitEvent = (event, callable) => {
      if (callable && typeof callable === 'function') {
        callable(event);
      }
    };

    const handleChange = (e) => {
      emitEvent(e, onChange);
    };

    return (
      <div
        className={`${styles.selectWrapper} ${!label ? styles.noLabel : ''}`}
      >
        {label && (
          <label className={'label'} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={'relative'}>
          <select
            ref={ref}
            className={`${className || ''} ${styles.select}`}
            onChange={handleChange}
            {...props}
          >
            {children}
          </select>
          <span className={caret}>
            <CaretIcon />
          </span>
        </div>
        {error && (
          <span className={styles.error}>
            {typeof error === 'string'
              ? error
              : error?.message || 'This field is required'}
          </span>
        )}
      </div>
    );
  },
);

Select.propTypes = {
  label: PropTypes.node,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

Select.displayName = 'Custom Seelect';

export default Select;
