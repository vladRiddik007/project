import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  // onLabelClick = () => {
  //   this.setState(({done}) => {
  //     return {
  //       done: !done
  //     }
  //   })
  // };
  // onMarkImportant = () => {
  //   this.setState( state => {
  //     return {
  //       important: !state.important 
  //     }
  //   })
  // };

  render() {
    const { 
      label, onDeleted , 
      onToggleImportant, 
      onToggleDone, 
      done , important
    } = this.props;

    let className = "todo-list-item";
    if(done) {
      className += " done";
    }
    if(important) {
      className += " important"
    }

    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success bnt-sm float-right"
          onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger bnt-sm float-right"
          onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired, 
  onToggleImportant: PropTypes.func.isRequired, 
  onToggleDone: PropTypes.func.isRequired, 
  done: PropTypes.bool.isRequired, 
  important: PropTypes.bool.isRequired
}