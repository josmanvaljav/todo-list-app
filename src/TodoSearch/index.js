import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

function TodoSearch() { /*{searchValue, setSearchValue}*/
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearchCss"
            placeholder="Search a task by name"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };