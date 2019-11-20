import React from "react";
import PropTypes from 'prop-types';
import TodoListItem from "../todo-list-item/todo-list-item";

import './todo-list.css';

const TodoList = ({ 
                    todos, 
                    onDeleted,
                    onToggleDone,
                    onToggleImportant
                  }) => {
  const elements = todos.map(item => {
    
    const {id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
        {elements}
    </ul>
  )
}

TodoList.propTypes = {
  todos:             PropTypes.array.isRequired,
  onDeleted:         PropTypes.func.isRequired,
  onToggleDone:      PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
}

export default TodoList;
