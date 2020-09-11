import React from 'react';

const Theme = (props) => {
  return <div className={`${props.theme} theme`}>{props.children}</div>;
};

export default Theme;
