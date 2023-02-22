import React from "react";
import "./TodoCounter.css";

function TodoCounter({completedTodos, totalTodos, loading}) { 
    return (
        <h2 
            className={`TodoCounterCss ${loading ? "TodoCounterCss--loading" : ""}`}
        >
            You have completed {completedTodos} of {totalTodos} TODOs
        </h2>
    );
}

export { TodoCounter };