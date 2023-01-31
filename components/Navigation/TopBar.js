import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../../utils/routes';
import logo from '../../public/images/logo-primary.svg';
import UserIcon from '../../public/images/icons/account_circle.svg';
import Dropdown from '../Dropdown';
import styles from './TopBar.module.css';
import {useUser} from '@auth0/nextjs-auth0/client';

const links = [
  /*
  {
    id: 1,
    title: 'Flows',
    Icon: () => <FlowsIcon />,
    href: routes.flows,
    value: 'flows',
  },
  {
    id: 2,
    title: 'Stats',
    Icon: () => <StatsIcon />,
    href: routes.stats,
    value: 'stats',
  },
  {
    id: 3,
    title: 'Settings',
    Icon: () => <SettingsIcon />,
    href: routes.settings,
    value: 'settings',
  },
  */
];

const TopBar = ({active}) => {
  const {user: accountData} = useUser();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <Link href={routes.home} className={styles.logo}>

            <Image
              src={logo}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition={'center'}
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
          <Dropdown>
            <Dropdown.Button className={styles.button} variant={'outline'}>
              {accountData?.imageUrl ? (
                <img
                  className={styles.companyLogo}
                  src={accountData?.imageUrl}
                />
              ) : (
                <Image
                  src={UserIcon}
                  layout={'fill'}
                  objectFit={'contain'}
                  objectPosition={'center'}
                />
              )}
              {/*<Image src={UserIcon} height={32} width={32} />*/}
            </Dropdown.Button>
            <Dropdown.Menu>
              <div role="none">
                <Dropdown.Link href={'/settings'}>Account</Dropdown.Link>
              </div>
              <div role={'none'}>
                <Dropdown.Link href={"/api/auth/logout"}>
                  Sign out
                </Dropdown.Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {
  active: PropTypes.oneOf(links.map(({value}) => value)),
};

export default TopBar;
