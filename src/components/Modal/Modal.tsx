import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isVisible: boolean;
  title?: string;
  children: JSX.Element;
  onCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, title, children, onCloseModal } = props;

  if (!isVisible) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.modalclose} onClick={onCloseModal}>
            &times;
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
