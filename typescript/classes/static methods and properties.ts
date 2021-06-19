// Static methods and properties are used to group utility functions
// and constants in a class. They can be called directly by the class

class Circle {
    // static properties
    static pi = 3.14;

    // static methods
    static circumference(radius: number) {
        // static properties are called using ClassName.property
        return 2 * Circle.pi * radius;
    }

    static area(radius: number) {
        return Circle.pi * radius ** 2;
    }
}

console.log(Circle.pi);
console.log(Circle.circumference(5));
console.log(Circle.area(5));
