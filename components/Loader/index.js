import React from 'react';
import PropTypes from 'prop-types';
import SpinIcon from '../../public/images/icons/spinner.inline.svg';
import styles from './Loader.module.css';

const Loader = ({ fullScreen, relative, className }) => (
  <div
    className={`${className} ${styles.wrapper} ${
      fullScreen ? styles.fullScreen : ''
    } ${relative ? styles.relative : ''}`}
  >
    <SpinIcon />
  </div>
);

Loader.propTypes = {
  fullScreen: PropTypes.bool,
  relative: PropTypes.bool,
};

Loader.defaultProps = {
  fullScreen: false,
  relative: false,
  className: '',
};

export default Loader;
