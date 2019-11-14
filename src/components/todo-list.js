import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = (props) => {

        const items = [
        {id: 1, text:"Learn React"},
        {id: 2, text:"Build App Build App"},
        {id: 3, text:"Build App"},
        {id: 4, text:"Learn React"},
        {id: 5, text:"Build App"},
    ]

    const itemMap = items.map(i => (
        <li key={i.id}>{i.text}</li>
    ))

    return (
            <TodoListItem
            label={itemMap}
            important={true}/>
    );
};
export default TodoList;