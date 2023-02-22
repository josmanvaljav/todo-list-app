import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const [searchValue, setSearchValue] = React.useState("");
    const {
      item: todos, 
      saveItem: saveTodos,
      loading,
      error,
      synchronizeItems: synchronizeTodos
    } = useLocalStorage("TODO_V1", []);
    const [openModal, setOpenModal] = React.useState(false);

    // Counter management
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    // Task searcher
    let searchedTodos = [];
  
    if (todos.length < 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
      });
    }

    // Mark as a completed task function
    function markCompletedTask(taskText) {
      const todoIndex = todos.findIndex(todo => todo.text === taskText);
      const newTodos = [...todos];
      if (newTodos[todoIndex].completed) {
        newTodos[todoIndex].completed = false;
      } else {
        newTodos[todoIndex].completed = true;
      }
      saveTodos(newTodos);
    }
  
    // Delete task function
    function deleteTask(taskText) {
      const todoIndex = todos.findIndex(todo => todo.text === taskText);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }

    // Add task function
    function addTask(taskText) {
      const newTodos = [...todos];
      newTodos.push({
        text: taskText,
        completed: false
      });
      saveTodos(newTodos);
    }

    return {
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            markCompletedTask,
            deleteTask,
            addTask,
            openModal, 
            setOpenModal,
            synchronizeTodos
    };
}

export { useTodos };