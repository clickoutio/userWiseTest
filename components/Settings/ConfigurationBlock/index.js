import React, { useState } from 'react';
import Card from 'components/Settings/Card';
import useUser from 'contexts/userContext';
import { useForm } from 'react-hook-form';
import { deleteAccountAPI } from 'apis/account';
import styles from './ConfigurationBlock.module.css';

const ConfigurationBlock = () => {
  const { accountData, userData, logout } = useUser();
  const { handleSubmit, register } = useForm();

  const [show, setShow] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteAccount = async ({ email }) => {
    // deleteFlowAPI
    if (email !== userData?.email) {
      return;
    }
    setStatusLoading(true);
    const response = await deleteAccountAPI();
    if (response.isSuccess()) {
      logout();
    }
    setStatusLoading(false);
  };
  return (
    <>
      <Card title={'Account Configuration'}>
        <div className={styles.block}>
          <div className={styles.top}>
            <h5 className={styles.title}>Access email</h5>
          </div>
          <p className={styles.info}>
            Your current email is: {userData?.email}
          </p>
        </div>
      </Card>
    </>
  );
};

export default ConfigurationBlock;
