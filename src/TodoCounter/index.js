import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() { /* Otra manera de traer los parámetros en ves de usar props */
    const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounterCss">You have completed {completedTodos} of {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };