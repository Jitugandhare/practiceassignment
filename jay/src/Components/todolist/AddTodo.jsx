import { useState } from "react";
// import Button from "./Button";
import styles from "./AddTodo.module.css";
import Button from "../common/button/Button";

function AddTodo({ handleAddTodo }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleInputChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (newTodoTitle === "") {
      alert("Todo title cannot be empty");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      status: false,
    };
    handleAddTodo(newTodo);
    setNewTodoTitle("");
  };

  return (
    <div>
      {/* Add a input tag here and a button to "ADD" with the help of `Button` component */}
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodoTitle}
        onChange={handleInputChange}
        className={styles.input}
      />
      <Button onClick={handleAddButtonClick} text="ADD"/>
    
    </div>
  );
}

export default AddTodo;
