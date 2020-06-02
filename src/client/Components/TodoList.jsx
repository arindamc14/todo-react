import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        Welcome from todo list.
        <TodoItem/>
      </div>
    );
  }
}

export default TodoList;