import React from 'react';
import './ModalCard.css';
const ModalCard = (props) => {
  return (
    <div className='ModalCard'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default ModalCard;
