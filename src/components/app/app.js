import React from 'react';
import Clock from '../clock';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import './app.css';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list/todo-list';

const App = () => {

    const todoData = [
        {label: "idfgdfg", important: true, id: 1,},
        {label: "drygd", important: true, id: 2,},
        {label: "54463363", important: true, id: 3,},
    ]

    return (
        <div className="todo-app">
            <Clock/>
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    )
}

export default App;