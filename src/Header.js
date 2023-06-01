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
  const onClickCancel = () => {
    console.log('clicked cancel')
  }
  return (
    <header className="header">
      <h1 style={HeaderStyle}>{title}</h1>
      <Button color="green" text="add" onClick={onClickAdd}/>
      <Button color="red" text="delete" onClick={onClickDelete}/>
      <Button color="gray" text="cancel" onClick={onClickCancel}/>
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
