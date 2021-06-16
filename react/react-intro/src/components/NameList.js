import React from "react";

function NameList() {
    // array of names
    const names = ["Abdur", "Ahmed", "Arefa"];

    // create a new array of names with h2 tags
    // Use index as the key attribute only when all of the below 3 conditions hold:
    // 1. the items in the list do not have a unique ID
    // 2. The list is static and will not change
    // 3. The list will never be reordered or filtered
    // In general, avoid using index as the key
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

    // return the JSX
    return <div>{nameList}</div>;
}

export default NameList;
