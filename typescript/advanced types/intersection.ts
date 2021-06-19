type Admin = {
    name: string;
    supervising: string[];
};

type Employee = {
    name: string;
    project: string;
};

// intersection operator
// any variable of type AdminEmployee must contain
// all the properties of Admin and Employee
type AdminEmployee = Admin & Employee;

const admEmp: AdminEmployee = {
    name: "Abdur",
    supervising: ["A", "B", "C"],
    project: "Aramco",
};

// here, typeof c = number
type a = string | number;
type b = boolean | number;
type c = a & b;
