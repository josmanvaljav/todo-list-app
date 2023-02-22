//import './App.css';
import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoCreateButton } from "../TodoCreateButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

function App() {
  const {
    error, 
    loading, 
    searchedTodos,
    markCompletedTask,
    deleteTask,
    openModal, 
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTask,
    synchronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          onError={() => <p>There was an error...</p>}
          onLoading={() => <p>Loading your tasks...</p>}
          onEmptyTodos={() => <p>Create your first TODO...</p>}
          onEmptySearchResults={(searchText) => <p>There is no results for {searchText}</p>}
          render={todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onMarkCompletedTask={() => markCompletedTask(todo.text)}
              onDeleteTask={() => deleteTask(todo.text)}
            />
          )}
        >
          {/* {todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onMarkCompletedTask={() => markCompletedTask(todo.text)}
              onDeleteTask={() => deleteTask(todo.text)}
            />
          )} */}
        </TodoList>

          {/* onError={() => <TodoError />}
          onLoading={() => <TodoLoading />}
          onEmptyTodos={() => <EmptyTodos />} */}

        {openModal ? (
            <Modal>
                <TodoForm
                  addTask={addTask}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        ) : ""}

        <TodoCreateButton 
            setOpenModal={setOpenModal}
        />

        <ChangeAlertWithStorageListener
          synchronizeTodos={synchronizeTodos}
        />
    </React.Fragment>
  );
}

export default App;
