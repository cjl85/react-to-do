import React, { Component } from 'react';

class ToDo extends Component {

  render() {

    return (
      <div>
      <ul>
         <input type= "checkbox" checked= { this.props.isCompleted } onChange= { this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <button onClick={ this.props.deleteToDo }> X </button>
      </ul>
      <div>
       <ToDo entries={this.state.todo} delete={this.deleteToDo} />

       </div>
       </div>
    );
  }
}
export default ToDo;
