import React from 'react';
import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
  return (
    <div>
      <button className="btn" 
      onClick={onClick}
      style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
}

Button.defaultProps = {
    color: "steelblue",
  };
  Button.propTypes = {
    text: PropTypes.string.isRequired,
    color:PropTypes.string
  };

export default Button;
