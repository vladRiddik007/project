import React from "react";
import PropTypes from 'prop-types'
import './app-header.css'

const AppHeader = ({toDo, done}) => {
  
  
  return (
      <div className="app-header d-flex">
            <h1>TODO List</h1>
            <h2>{toDo} more to do, {done} done</h2>
      </div>
  );
};

AppHeader.propTypes = {
  toDo: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired
}

export default AppHeader;
