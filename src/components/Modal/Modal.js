import React from 'react';
import './Modal.css';
const Modal = (props) => {
  return (
    <div className='backdrop' onClick={props.clicked}>
      <div className='displayed'>{props.children}</div>
    </div>
  );
};

export default Modal;
