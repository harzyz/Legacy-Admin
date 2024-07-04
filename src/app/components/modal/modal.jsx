"use-client"
import React, { useEffect } from 'react';
import styles from './modal.module.scss'

const Modal = ({ isOpen, onClose, children }) => {
  const toggleBodyOverflow = open => {
    const body = document.body;
    if (body) {
      body.style.overflow = open ? 'hidden' : 'unset';
    }
  };

  useEffect(() => {
    toggleBodyOverflow(isOpen);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={styles.modalWrapper}
          onClick={onClose}
          style={{ zIndex: 1000 }}
        >
          <div className={styles.Modal_Container}
            // style={{
            //   background: '#ffffff',
            //   borderRadius: '8px',
            //   padding: '10px',
            // }}
            onClick={e => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;