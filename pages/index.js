import React, {useState} from 'react';
import TopBar from '../components/Navigation/TopBar';
import DotIcon from '../public/images/icons/dot.inline.svg';
import addIcon from '../public/images/icons/add.svg';
import Button from '../components/Button';
import styles from './flows/flows.module.css';
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0/client";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Flows = () => {
  const {user: userData} = useUser();
  const [popup, showPopup] = useState(false);

  const stats = [
    {
      id: 0,
      iconClass: 'fill-error',
      count: 0,
      title: 'Paused',
    },
    {
      id: 1,
      iconClass: 'fill-success-2',
      count: 0,
      title: 'Activated',
    },
  ];
  const CreateFlowComponent = () => (
    <div className={'flex-grow py-20'}>
      <div className={styles.createNew}>
        <div className={styles.content}>
          <h4 className={styles.title}>Create your first flow</h4>
          <p>
            Configure your first Clickout in a few minutes and integrate it in
            your platform with a simple 10 lines script
          </p>
          <Button
            type={'button'}
            onClick={() => showPopup(true)}
            size={'large'}
            className={styles.btnCreate}
            icon={addIcon}
          >
            Create new
          </Button>
        </div>
      </div>
    </div>
  );

  const Popup = () => (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h1>Showing</h1>
      </div>
    </div>
  );

  return (
    <>
      {popup && <Popup/>}
      <TopBar active={'flows'}/>
      <div className={styles.info}>
        <h2 className={styles.userName}>👋🏼 Hello {userData?.firstName}</h2>
        <p>Create your first flow now and start saving clients</p>
        <div className={styles.stats}>
          {stats.map(({id, iconClass, count, title}) => (
            <div key={id} className={styles.card}>
              <span className={styles.icon}>
                <DotIcon className={iconClass}/>
              </span>
              <span className={'text-black'}>{count}</span> <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
      <CreateFlowComponent/>
    </>
  );
};

Flows.propTypes = {};

export default withPageAuthRequired(Flows, {
  onRedirecting: () => <Loading/>,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
