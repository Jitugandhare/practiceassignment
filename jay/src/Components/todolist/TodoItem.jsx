// import { useState } from "react";
import styles from "./TodoItem.module.css";
import Button from "../common/button/Button";


function TodoItem({ todo, handleToggleTodo, handleDeleteTodo }) {

 
const handleToggleButtonClick = () => {
  handleToggleTodo(todo.id);
};

const handleDeleteButtonClick = () => {
  handleDeleteTodo(todo.id);
};

return (
    <div data-testid="todo-item" className={styles.wrapper}>
       <p>
        {todo.title} - {todo.status ? "Completed" : "Not Completed"}
      </p>
      {/* Add the p tag, and required elements */}
      <div>{/* add the required buttons here using Button component */}
      <Button onClick={handleToggleButtonClick} text="TOGGLE"/>
      <Button onClick={handleDeleteButtonClick} text="DELETE"/>
      </div>
    </div>
  );
}

export default TodoItem;
