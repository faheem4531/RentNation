
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import styles from './PopUpModal.module.css';
import X from '../../assets/svgs/x-close.svg';
import LoginButton from '../buttons/LoginButton';

function PopUpModal({ width, heading, children, hidden, onClose }) {
  const inputStyle = {
    width: width || '400px !important ',
  };

  return (
    <div className={styles.modal}>
      <Modal
        dialogClassName={inputStyle}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        show={true}
        onHide={onClose}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <div className={styles.modalHeading}>
              {heading}
            </div>
            <img onClick={onClose} className={styles.closeButton} src={X} />
          </div>
          <div className={styles.bodyChild}>
            {children}
          </div>
          {hidden && <div className={styles.modalButton}>
            <LoginButton
              buttonText="SignIn"
              fontSize="14px"
              borderColor='1px solid var(--border-dark-yellow1-color) '
              onClick={() => { }}
            />
          </div>}
        </div>

      </Modal>
    </div>
  );
}
export default PopUpModal;



