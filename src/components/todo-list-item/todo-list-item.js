import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  };
  onMarkImportant = () => {
    this.setState( state => {
      return {
        important: !state.important 
      }
    })
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done , important} = this.state;

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
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success bnt-sm float-right"
          onClick={this.onMarkImportant}>
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
