import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    < div style={{border:"2px solid black"}}>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Todo List</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      {/* Add AddTodo component here */}
      <ul>
        {/* map all the todo's here with the help of TodoItem component */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
