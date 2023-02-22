import React from "react";
import "./TodoForm.css";

function TodoForm({
    addTask,
    setOpenModal
}) {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Write a task name"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };