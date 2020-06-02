import React from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        Welcome from todo app.
        <TodoList/>
        
      </div>
    );
  }
}

export default TodoApp;