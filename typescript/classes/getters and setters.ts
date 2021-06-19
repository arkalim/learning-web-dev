// Properties of a class can be accessed using getters and setters

class Data {
    // private property
    constructor(private data: string[]) {}

    // getter function to get the private property
    // getters must return something
    get first() {
        return this.data[0];
    }

    // setter function to set the private property
    set add(item: string) {
        this.data.push(item);
    }
}

const data = new Data(["A", "B", "C", "D", "E"]);

// calling getters and setters doesn't require paranthesis
console.log(data.first);

// add "F" to the private property
data.add = "F";
