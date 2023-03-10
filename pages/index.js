import React, {useEffect} from 'react';
import TopBar from '../components/Navigation/TopBar';
import DotIcon from '../public/images/icons/dot.inline.svg';
import addIcon from '../public/images/icons/add.svg';
import Button from '../components/Button';
import styles from './index.module.css';
import Popup from "../components/Popup";
import CongratsPopup from "../components/Popup/congrats";
import usePopupVisible from "../hocs/usePopupVisible";
import dynamic from "next/dynamic";

function Flows() {
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

  const handleUserClickOnATemplate = () => {
    console.log('handleUserClickOnATemplate');
    setIsPopupVisible(false);
    setIsCongratsVisible(true);
  }

  const sendRefinerData = () => {
    const _refiner = dynamic(() => import('refiner-js'), {ssr: false});
    console.log("using refiner", _refiner);
    _refiner('setProject', '431bd1e0-bd0f-11ed-8bb0-a7f70ccf4803');
    _refiner('identifyUser', {
      id: 'USER-ID-ABC-123', // Replace with your user ID
      email: 'jane@awesome.com', // Replace with user Email
      name: 'Jane Doe', // Replace with user name
    });
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
              sendRefinerData();
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
        <h2 className={styles.userName}>???????? Hello</h2>
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
