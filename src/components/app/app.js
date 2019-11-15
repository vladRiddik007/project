import React, {Component} from 'react';
import Clock from '../clock';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import './app.css';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list/todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component{

    maxId = 100;

    state = {
        todoData: [
            {label: "idfgdfg", important: true, id: 1,},
            {label: "drygd", important: false, id: 2,},
            {label: "54463363", important: true, id: 3,}
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            }
        })
    }

    render() {

    return (
        <div className="todo-app">
            <Clock/>
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>
            <TodoList todos={this.state.todoData}
            onDeleted={this.deleteItem}/>
            <ItemAddForm addItem={this.addItem}/>
        </div>
    )
    }
}

