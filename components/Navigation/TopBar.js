import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../../utils/routes';
import logo from '../../public/images/logo-primary.svg';
import styles from './TopBar.module.css';

const links = [];

const TopBar = ({active}) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <Link href={routes.home} className={styles.logo}>

            <Image
              src={logo}
            />

          </Link>
        </div>
        <div className={styles.tabs}>
          {links.map(({id, title, Icon, href, value}) => (
            (<Link
              key={id}
              href={href}
              className={`${styles.tab} ${
                value === active ? styles.active : ''
              }`}>

              <span className={styles.icon}>
                <Icon/>
              </span>
              {title}

            </Link>)
          ))}
        </div>
        <div className={styles.settings}>
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {
  active: PropTypes.oneOf(links.map(({value}) => value)),
};

export default TopBar;
