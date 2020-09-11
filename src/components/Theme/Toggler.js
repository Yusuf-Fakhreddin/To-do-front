import React from 'react';
import './Toggler.css';
const Toggler = (props) => {
  return (
    <React.Fragment>
      <div>
        <input
          onClick={props.clicked}
          type='checkbox'
          className='checkbox'
          id='chk'
        />
        <label className='label' for='chk'>
          <i className='fas fa-moon'></i>
          <i className='fas fa-sun'></i>
          <div className='ball'></div>
        </label>
      </div>
    </React.Fragment>
  );
};

export default Toggler;
