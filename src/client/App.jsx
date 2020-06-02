import React from 'react';
import { hot } from 'react-hot-loader';
import TodoApp from './Components/TodoApp';


class App extends React.Component {
  render() {
    return (
      <div>
      <TodoApp/>
        Welcome.
      </div>
    );
  }
}

export default hot(module)(App);
