import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoCreateButton } from "../TodoCreateButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos,
        markCompletedTask,
        deleteTask,
        openModal, 
        setOpenModal
    } = React.useContext(TodoContext);
    // console.log("AppUI.js (openModal): " + openModal); ///////////////////////////////////////
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error ? <p>Hubo un error...</p> : ""}
                {loading ? <p>Estamos cargando...</p> : ""}
                {(!loading && !searchedTodos.length) ? <p>Create your first TODO...</p> : ""}

                {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onMarkCompletedTask={() => markCompletedTask(todo.text)}
                    onDeleteTask={() => deleteTask(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal ? (
                <Modal>
                    <TodoForm />
                </Modal>
            ) : ""}

            <TodoCreateButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };