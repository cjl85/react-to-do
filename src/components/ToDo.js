import React, { Component } from 'react';

class ToDo extends Component {

  render() {

    return (
  
      <ul>
         <input type= "checkbox" checked= { this.props.isCompleted } onChange= { this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <button onClick={ this.props.deleteToDo }> X </button>
      </ul>

    );
  }
}
export default ToDo;
