import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build App</li>
        </ul>
    );
};

const AppHeader = () => {
    return(
        <h1>TODO List</h1>
    )
}

const SearchPanel = () => {
    return(
        <input placeholder="search"/>
    )
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root'));