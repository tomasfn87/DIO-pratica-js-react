import React from "react";
import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ children, color, comment }) => {
  return (
    <h2>{children} <span className={color}>{color}</ span>{comment}</ h2>
  )
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["red", "green", "blue"]).isRequired
}

Title.defaultProps = { color: "green" }

export default Title;
