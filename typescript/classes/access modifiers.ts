class Department {
    // private property can only be accessed in the same class
    // they cannot be accessed even in the derived classes
    private name: string;
    private readonly id: number; // readonly property can not to modified

    // protected properties can only be accessed
    // within the same class and all the classes
    // that extends that class
    protected employees: string[] = [];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    addEmployee(this: Department, employee: string) {
        this.employees.push(employee);
        console.log(`${employee} added to ${this.name} department`);
    }

    showEmployees(this: Department) {
        console.log(this.name, this.id);
        console.log(this.employees);
    }
}

const Science = new Department("Science", 0);

// access the private properties through public methods
Science.addEmployee("Abdur");
Science.showEmployees();
