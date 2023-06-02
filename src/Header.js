import React from "react";
import PropTypes from "prop-types";
import Button from "./components/Button";

function Header({ title }) {
  const HeaderStyle = { color: "red" };
  const onClickAdd = () => {
    console.log('clicked Add')
  }
  const onClickDelete = () => {
    console.log('clicked Delete')
  }
  return (
    <header className="header">
      <h1 style={HeaderStyle}>{title}</h1>
      <Button color="green" text="add" onClick={onClickAdd}/>
      <Button color="red" text="flash" onClick={onClickDelete}/>
      
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
