// Iterators return the element in an array one by one

// creating a iterator using iterator protocol
function Iterator(array){
    let nextIndex = 0;
    
    // the Iterator function will return an object containing a next function
    return {
        next: function(){

            // if the array isn't exhausted 
            if (nextIndex < array.length){
                // return an object with the next item and done: false
                return {
                    value: array[nextIndex++],
                    done: false
                }
            }

            else{
                // return an object with done: true
                return {
                    done: true
                }
            }
        }
    }
}

// create an array
const array = ['Apples', 'Oranges', 'Bananas', 'Grapes'];

// create the iterator object for the array
let fruits = Iterator(array);

// Use the iterator
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
