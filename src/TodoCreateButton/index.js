import React from "react";
import "./TodoCreateButton.css";

function TodoCreateButton(props) {
    const onClickButton = () => {
        props.setOpenModal(true);
    }
    
    return (
        <button 
        className="TodoCreateButtonCss"
        onClick={onClickButton}
        >+</button>
    );
}

export { TodoCreateButton };