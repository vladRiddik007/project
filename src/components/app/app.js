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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Drink '),
            this.createTodoItem('Drink Coffee Coffee'),
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
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
        const newItem = this.createTodoItem(text);
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })

    };

    render() {
        const { todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;

        const todoCoutn = todoData.length - doneCount;

    return (
        <div className="todo-app">
            <Clock/>
            <AppHeader toDo={todoCoutn} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}/>
            <ItemAddForm addItem={this.addItem}/>
        </div>
    )
    }
}

