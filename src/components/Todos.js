import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render(){
    return this.props.todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo ={this.props.delTodo} />
    ))
  }
}

//Prop type: Take note that the props from the App.js(which is a states there) is actually an array

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;