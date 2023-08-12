import React from "react";

import Modal from "react-bootstrap/Modal";
import styles from "./PopUpModal.module.css";
import X from "../../assets/svgs/x-close.svg";
import ModalButton from "../buttons/LoginButton";

function PopUpModal({
  width,
  heading,
  children,
  hidden,
  onClose,
  modalBtnText,
}) {
  const inputStyle = {
    width: width || "100px",
  };

  const modalStyle = {
    backdropFilter: "blur(8px)",
  };

  return (
    <Modal
      dialogClassName={inputStyle}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      show={true}
      onHide={onClose}
      style={modalStyle}
    >
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <div className={styles.modalHeading}>{heading}</div>
            <img onClick={onClose} className={styles.closeButton} src={X} />
          </div>
          <div className={styles.bodyChild}>{children}</div>
          {hidden && (
            <div className={styles.modalButton}>
              <ModalButton
                buttonText={modalBtnText}
                fontSize="14px"
                borderColor="1px solid var(--border-dark-yellow1-color) "
                onClick={() => {}}
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default PopUpModal;
