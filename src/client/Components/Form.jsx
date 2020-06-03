import React from 'react';


class Form extends React.Component {

    constructor(){
    	super();

	    this.state = {
     	 todo: ""
    	};
  	}
  	


  changeHandler(event){
  console.log("change", event.target.value);
  this.setState({todo: event.target.value});
  }

  clickHappened(event){
        console.log(this.state.todo)
        // this.setState({todo: event.target.value});
        this.props.setTodo(this.state.todo);
  
    }

  render() {

    return (
    	<div>
        <input placeholder="What needs to be done?" onChange={(event)=> {this.changeHandler(event);}} value={this.state.todo}>
        </input>

        <button onClick={()=>{this.clickHappened(event);}}> Save</button>
      </div>
    );
  }    
}

export default Form;