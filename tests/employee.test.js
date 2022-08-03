const Employee = require("../lib/employee");

//describe
describe("Employee", () => {
    it("Create employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object")
    });
    it ("Can make name to equal constructor arguement", () => {
        const name = "Jon";
        const employee = new Employee(name);

        expect (employee.name).toBe(name);
    });
    
    it ("Can make ID to equal constructor arguement", () => {
        const test = 123;
        const employee = new Employee("Jon", test);

        expect (employee.id).toBe(test);
    });
    it ("Can make ID to equal constructor arguement", () => {
        const test = "jon@email.com";
        const employee = new Employee("Jon", 123, test);

        expect (employee.email).toBe(test);
    });

    describe("employeeName", () => {
        it ("render name from employeeName()", () => {
            const test = "Jon";
            const employee = new Employee(test);

            expect(employee.employeeName()).toBe(test);
        });
    });
    describe("employeeId", () => {
        it("render id from employeeId", () => {
            const test = 123;
            const employee = new Employee("Jon", test)

            expect(employee.employeeId()).toBe(test);
        });
    });
    describe("employeeEmail", () => {
        it("render id from employeeEmail", () => {
            const test = "jon@email.com";
            const employee = new Employee("Jon", 123,test)

            expect(employee.employeeEmail()).toBe(test);
        });
    });

});


   
//it
//expect