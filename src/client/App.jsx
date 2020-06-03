import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './Components/TodoList';
import Form from './Components/Form';

class App extends React.Component {
	constructor(){
    	super();

	    this.state = {
     	 todo: ""
    	};
  	}
  	setTodo(todo) {
  		this.setState({todo: todo});

  	}
  render() {
    return (
      <div>
      {this.state.todo}
      <Form setTodo={(s)=>{this.setTodo(s)}}/>
      <TodoList/>
      </div>
    );
  }
}

export default hot(module)(App);
