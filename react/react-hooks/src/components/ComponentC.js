import React from "react";
import ComponentE from "./ComponentE";

// create contexts
export const FirstName = React.createContext();
export const LastName = React.createContext();

function ComponentC() {
    return (
        <div>
            {/* value will be available to be consumed by any child of Component E */}
            <FirstName.Provider value="Abdur">
                <LastName.Provider value="Rahman">
                    <ComponentE />
                </LastName.Provider>
            </FirstName.Provider>
        </div>
    );
}

export default ComponentC;
