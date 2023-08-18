import React, { useState, useEffect } from 'react';
import InputField from './Components/Inputfield';
import Box from './Components/Box';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addToDoHandler = (item) => {
    if (!todos.some((todo) => todo.item === item)) {
      const newTodo = {
        item,
        time: new Date().toLocaleTimeString(),
      };
      setTodos([...todos, newTodo].sort((a, b) => a.item.localeCompare(b.item)));
    }
  };

  const deleteTodoHandler = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodoHandler = (index, editedItem) => {
    const updatedTodos = [...todos];
    updatedTodos[index].item = editedItem;
    setTodos(updatedTodos.sort((a, b) => a.item.localeCompare(b.item)));
  };

  return (
    <div className="bg-blue-800 h-screen p-3">
      <div className="rounded mx-auto w-[50%] h-[60vh] shadow-2xl bg-white">
        <InputField handler={addToDoHandler} />
        <Box
          data={todos}
          updateTodos={setTodos}
          deleteTodo={deleteTodoHandler}
          editTodo={editTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;