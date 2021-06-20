// property decorator
// target: prototype or constructor
// name: name of the property
function PropertyDecorator(target: any, propertyName: string | symbol) {
    console.log("Property Decorator");
    console.log("Target: ", target);
    console.log("propertyName: ", propertyName);
}

// accessor decorator
// these are attached to accessors like getters and setters
function AccessorDecorator(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
) {
    console.log("Accessor Decorator");
    console.log("Target: ", target);
    console.log("Name: ", name);
    console.log("Descriptor: ", descriptor);
}

// method decorator
// these are attached to methods
function MethodDecorator(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log("Method Decorator");
    console.log("Target: ", target);
    console.log("Name: ", name);
    console.log("Descriptor: ", descriptor);
}

// parameter decorator
// these are attached to method parameters
function ParameterDecorator(
    target: any,
    name: string | Symbol,
    position: number
) {
    console.log("Parameter Decorator");
    console.log("Target: ", target);
    console.log("Name: ", name); // name of the method
    console.log("Position: ", position); // position of the argument
}

class Person {
    // property decorator
    // run when the property is defined
    @PropertyDecorator
    name = "ARK";

    // accessor decorator
    // run when the accessor is defined
    @AccessorDecorator
    get getName() {
        return this.name;
    }

    // method decorator
    // run when the method is defined
    @MethodDecorator
    walk() {
        console.log(`${this.name} is walking.`);
    }

    // parameter decorator
    run(@ParameterDecorator speed: number) {
        console.log(`${this.name} is running at ${number}kmph.`);
    }
}
