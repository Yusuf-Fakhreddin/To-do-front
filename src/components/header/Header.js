import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <h1>Dear, {props.user.name}</h1>
      <h2>We hope you can be as productive as you can</h2>
      <h3>with out getting burn out xD</h3>
    </React.Fragment>
  );
};

export default Header;
