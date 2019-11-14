import React from 'react';

const TodoListItem = ({label, important = false}) => {

    const liStyle = {
        color: important ? "tomato" : "black"
    }

    return (
        <div>
            <ul style={liStyle}>{label}</ul>
        </div>
    )
}
export default TodoListItem;