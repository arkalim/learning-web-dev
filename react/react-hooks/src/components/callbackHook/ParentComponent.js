import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
    // create and setter functions
    const [age, setAge] = useState(18);
    const [salary, setSalary] = useState(50000);

    // useCallback takes in the original function as the first parameter
    // and an array of dependencies. A new instance of the function will
    // only be created when the dependencies change.
    const incrementAge = useCallback(() => {
        setAge((age) => age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary((salary) => salary + 1000);
    }, [salary]);

    // passing the state and the setter functions as props
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button onClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button onClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;
