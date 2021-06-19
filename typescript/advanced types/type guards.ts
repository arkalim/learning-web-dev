// type guards allow us to check the type of data at runtime

type Admin = {
    name: string;
    supervising: string[];
};

type Employee = {
    name: string;
    project: string;
};

// supervising and project might not exist in an instance of UnknownEmployee
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnknownEmployee) {
    console.log(`Name: ${employee.name}`);

    // type guard to check if supervising is in employee
    if ("supervising" in employee) {
        console.log(`Supervising: ${employee.supervising}`);
    }

    // type guard to check if project is in employee
    if ("project" in employee) {
        console.log(`Project: ${employee.project}`);
    }
}

// In case of classes, we can use instanceof operator (available in JS)
class Car {
    drive() {
        console.log("Driving a car...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    load() {
        console.log("Loading...");
    }
}

// a function that can input an instance of Car or Truck
function useVehicle(vehicle: Car | Truck) {
    vehicle.drive();

    if (vehicle instanceof Truck) {
        vehicle.load();
    }
}

// instances
const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);
