import React from 'react';
import Clock from '../clock';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import './app.css';
import ItemStatusFilter from '../item-status-filter';
import TodoListItem from '../todo-list-item';

const App = () => {

    const todoData = [
        {id: 1, label: "idfgdfg", important: true},
        {id: 2, label: "drygd", important: false},
        {id: 3, label: "54463363", important: false},
    ]

    return (
        <div className="todo-app">
            <Clock/>
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>
            <TodoListItem todos={todoData}/>
        </div>
    )
}

export default App;