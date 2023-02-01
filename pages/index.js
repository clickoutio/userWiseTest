import React, {useEffect, useRef, useState} from 'react';
import TopBar from '../components/Navigation/TopBar';
import DotIcon from '../public/images/icons/dot.inline.svg';
import addIcon from '../public/images/icons/add.svg';
import Button from '../components/Button';
import styles from './index.module.css';
import Popup from "../components/Popup";
import CongratsPopup from "../components/Popup/congrats";
import {useSession} from "next-auth/react";
import usePopupVisible from "../hocs/usePopupVisible";
import Router from "next/router";

function Flows() {
  console.log(useSession());

  const [ref, isPopupVisible, setIsPopupVisible] =
    usePopupVisible(false);

  const [congratsRef, isCongratsVisible, setIsCongratsVisible] =
    usePopupVisible(false);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        console.log(isPopupVisible, isCongratsVisible);
        setIsPopupVisible(false);
        setIsCongratsVisible(false);
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, []);

  const {session: userData, status} = useSession();

  if (status === 'loading') return <div>Loading...</div>

  if (status !== "authenticated")
    return Router.push("/api/auth/signin")

  const handleUserClickOnATemplate = () => {
    console.log('handleUserClickOnATemplate');
    setIsPopupVisible(false);
    setIsCongratsVisible(true);
  }

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
            onClick={() => {
              setIsPopupVisible(true)
            }}
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

  return (
    <>
      {isCongratsVisible && <CongratsPopup ref={congratsRef}/>}
      {isPopupVisible && <Popup ref={ref} handleUserClickOnATemplate={handleUserClickOnATemplate}/>}
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
              <span className={'text-black'}>{count}</span>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
      <CreateFlowComponent/>
    </>
  );
}

export default Flows;
