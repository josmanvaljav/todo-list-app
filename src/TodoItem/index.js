import React from "react";
import "./TodoItem.css"

function TodoItem(props) {
    return (
        <li className="TodoItemCss">
            <span 
                className={`Icon Icon-check ${props.completed ? "Icon-check--active" : ""}`}
                onClick={props.onMarkCompletedTask}
            >√</span>
            <p className={`TodoItemCss-p ${props.completed ? "TodoItemCss-p--completed" : ""}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDeleteTask}
            >X</span>
        </li>
    );
}

export { TodoItem };