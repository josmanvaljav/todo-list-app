import React from "react";

// Create a custom React Hook for Local Storage - for convention we begin with the term "use".
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setloading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    // Managing effects to control / no render what is inside the function.
    React.useEffect(() => {
      setTimeout(() => {
        try {
          // Prepare the local storage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (localStorageItem) {
            parsedItem = JSON.parse(localStorageItem);
          } else {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }
  
          setItem(parsedItem);
          setloading(false);
        } catch (error) {
          setError(true);
        }
      }, 1000);
    });
  
  
    // Save into the local storage function
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
}

export { useLocalStorage };