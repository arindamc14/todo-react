import React from 'react';


class TodoList extends React.Component {

	constructor(){

      super()

      this.state = {
        list: ['']
      }
  	}
      setList () {
      	let newTodoItem = this.props.todo;
      	console.log("from todo list!!!!")
      	console.log(newTodoItem)
      }

  render() {

    return (


      <div>
        Welcome from todo list.

      </div>
    );
  }
}

export default TodoList;