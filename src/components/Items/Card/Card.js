import React from "react";
import "./Card.css";
const Card = (props) => {
  if (props.name === "Add")
    return (
      <div className="Card first" onClick={props.clicked}>
        <h1 className="add">
          <i className="far fa-lightbulb icon-spin"></i>
        </h1>
      </div>
    );
  else
    return (
      <div className="Card" onClick={props.clicked}>
        <div className="item">
          <h1 className="title">{props.name}</h1>
          <button className="check">
            <i className="fas fa-check-circle"></i>
          </button>
        </div>
        {/* <button className='desc-btn'>
          For description <i className='fas fa-long-arrow-alt-right'></i>
        </button> */}
      </div>
    );
};

export default Card;
