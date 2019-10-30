import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/todolist/TodoList';

function getTodosWithUsers() {
  const map = new Map();

  users.forEach((user) => {
    const shortUser = {};

    shortUser.email = user.email;
    shortUser.name = user.name;
    map.set(user.id, shortUser);
  });

  return todos.map((todo) => {
    const result = Object.create(todo);

    result.user = map.get(todo.userId);

    return result;
  });
}

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>
      <p>
        <span>
          Users:
          {users.length}
        </span>
      </p>
      <TodoList todos={getTodosWithUsers()} />
    </div>
  );
}

export default App;
