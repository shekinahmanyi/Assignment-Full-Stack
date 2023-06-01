import React from "react";
import PropTypes from "prop-types";
import Button from "./components/Button";

function Header({ title }) {
  const HeaderStyle = { color: "white", backgroundColor: "black" };
  return (
    <header className="header">
      <h1 style={HeaderStyle}>{title}</h1>
      <Button color="green" text="add"/>
      <Button color="red" text="delete"/>
      <Button color="gray" text="cancel"/>
    </header>
  );
}

Header.defaultProps = {
  title: "Students Follow Up",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
