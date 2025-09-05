// src/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem'; // 🔽 Import
import { TodoContext } from './contexts/TodoContext';

function TodoList() {
    const { todos } = useContext(TodoContext);
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        // 🔽 เรียกใช้ TodoItem และส่ง props ต่อไป
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;