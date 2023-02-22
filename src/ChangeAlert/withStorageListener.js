import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
                const [storageChange, setStorageChange] = React.useState(false);

                window.addEventListener("storage", (change) => {
                    if (change.key === "TODO_V1") {
                        console.log("Hubieron cambios en TODO_V1");
                        setStorageChange(true);
                    }
                });

                const toggleShow = () => {
                    props.synchronizeTodos();
                    setStorageChange(false);
                }

                return (<WrappedComponent 
                            show={storageChange}
                            toggleShow={toggleShow}
                        />
                );
            };
}

export { withStorageListener };
