import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {id: 1, label: "idfgdfg", important: true},
        {id: 2, label: "drygd", important: false},
        {id: 3, label: "54463363", important: false},
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root'));