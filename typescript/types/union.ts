// union type

// input1 and input2 can take on either number or string
function combine(input1: number | string, input2: number | string) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        // only if both the inputs are numbers, add them
        return input1 + input2
    } else {
        // else concatenate them as strings
        return input1.toString() + input2.toString()
    }
}

combine(1, 2)
combine('Abdur', 'Rahman')