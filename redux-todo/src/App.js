import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './App.css';

function App(props) {
  const [input, setInput] = useState("");

  const changesHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("")
  }

  return (
    <div className="App">
      {props.todos.map((todo, index) => <p key={index}>{todo}</p>)}
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={changesHandler}/>
        <button>Add Todo</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps, {addTodo})(App);
