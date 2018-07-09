import React from 'react';
import TodosList from './todos-list';

const todos = [
    {
        task: 'create react todo list',
        isCompleted: true
    },
    {
        task: 'create server',
        isCompleted: false
    },
    {
        task: 'create database',
        isCompleted: false
    },
    {
        task: 'create connection between server and database',
        isCompleted: true
    }  
]

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        todos
    }
  }

    render() {
        return (
            <div>
              <h1>React ToDos </h1>
              <TodosList todos={this.state.todos}/>

            </div>
        );
    }
}