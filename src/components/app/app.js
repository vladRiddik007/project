import React, { Component } from "react";
import Clock from "../clock";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import "./app.css";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form";

export default class App extends Component {

  maxId =(( localStorage.getItem('todoData') && (JSON.parse(localStorage.getItem('todoData')).reverse())[0].id)+1) || 100;

  state = {
    todoData: [],
    term: '',
    filter: 'all', //active, all, done
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }

  }

  deleteItem =async id => {
    await this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return { todoData: newArray }
    })
    localStorage.setItem('todoData', JSON.stringify(this.state.todoData));
  }

  addItem = async text => {
    const newItem = this.createTodoItem(text)
    await this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]

      return { todoData: newArr }
    })
    localStorage.setItem('todoData', JSON.stringify(this.state.todoData));
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id)
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  onToggleImportant =async id => {
    await this.setState(({ todoData }) => {

      return { todoData: this.toggleProperty(todoData, id, "important") }
    })
    localStorage.setItem('todoData', JSON.stringify(this.state.todoData));
  }

  onToggleDone =async id => {
    await this.setState(({ todoData }) => {

      return { todoData: this.toggleProperty(todoData, id, "done") }
    })
    localStorage.setItem('todoData', JSON.stringify(this.state.todoData));
  }

  onSearchChange = (term) => {
    this.setState({term})
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase()
                       .indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
      switch(filter) {
          case 'all'   : return items
          case 'active': return items.filter( item => !item.done)
          case 'done'  : return items.filter( item => item.done)
          default      : return items
      }
  }
  
  componentDidMount() {
    localStorage.getItem('todoData') && this.setState({
      todoData: JSON.parse(localStorage.getItem('todoData')),
      term: '',
      filter: 'all',
    })
  }

  render() {
    const { todoData, term, filter} = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCoutn = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <Clock />
        <AppHeader toDo={todoCoutn} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter 
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
