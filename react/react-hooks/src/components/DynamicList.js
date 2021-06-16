import React, { useState } from "react";

function DynamicList() {
    // start with an empty array
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, "Entry"]);
    };

    return (
        <div>
            <button onClick={addItem}>Add item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default DynamicList;
