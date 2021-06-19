// function overloading allows us to specify multiple
// function signatures (number and types of arguments and return)

type Combinable = number | string;

// to tell the TS compiler about the return types depending upon
// the argument types, we can use function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number, b: string): string;
function combine(a: string, b: number): string;

// by default combine() can output either string or number
function combine(a: Combinable, b: Combinable): Combinable {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

const result = combine("Hey ", 1);

// now the TS compiler knows that for this particular argument
// combination, the output will be of type string
console.log(result.length);
