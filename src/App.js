import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state= {
      todos: [
        {id: 0, text: 'Make Dinner tongight'},
        {id: 0, text: 'Fold the laundry'},
        {id: 0, text: 'Learn how to make a React'}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    console.log("Todo added:", todoText);
  }

  removeTodo(id){
    console.log('removing: ', id);
  }
  
  render() {
    return (
      <div className="App">
      <div className="todo-wrapper">
      <Header />
      <TodoInput todoText="" addTodo={this.addTodo}/>
      </div>
      
      </div>
    );
  }
}

export default App;
