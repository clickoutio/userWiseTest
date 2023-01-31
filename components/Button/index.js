import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Loader from '../Loader';
import styles from './Button.module.css';

const Button = forwardRef(
  (
    {
      htmlFor,
      children,
      className,
      icon: Icon,
      variant,
      size,
      align,
      weight,
      loading,
      ...props
    },
    ref,
  ) => {
    if (htmlFor) {
      return (
        <label
          htmlFor={htmlFor}
          variant={variant}
          variantsize={size}
          className={`${className || ''} ${styles.btn}`}
          {...props}
        >
          <div className={styles.wrapper}>
            {Icon && (
              <span className={styles.icon}>
                {typeof Icon === 'object' ? <Image src={Icon} /> : <Icon />}
              </span>
            )}
            {children}
          </div>
        </label>
      );
    }
    return (
      <button
        ref={ref}
        variant={variant}
        variantsize={size}
        className={`${className || ''} ${styles.btn} ${
          loading ? styles.loading : ''
        }`}
        {...props}
      >
        {loading && <Loader className={styles.loader} />}
        <div className={styles.wrapper} align={align} weight={weight}>
          {Icon && (
            <span className={styles.icon}>
              {typeof Icon === 'object' ? <Image src={Icon} /> : <Icon />}
            </span>
          )}
          {children}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'outline',
    'outline-error',
    'outline-primary',
    'clean',
  ]).isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  align: PropTypes.oneOf(['left', 'right']),
  weight: PropTypes.oneOf(['normal']),
  icon: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
