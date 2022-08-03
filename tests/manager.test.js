const Manager = require("../lib/manager");

it("Set office number", () => {
    const test = 9876;
    const employee = new Manager("Mark", 12345, "mark@email.com", test);
    expect(employee.officeNumber).toBe(test);
  });
it("adds role to engineer object with employeeRole()", () => {
    const test = "Manager";
    const employee = new Manager("Mark", 12345, "mark@email.com", test);

    expect(employee.employeeRole()).toBe(test);
});
it("retrieves office number managed()", () => {
    const test = 9876;
    const employee = new Manager("Mark", 12345, "mark@email.com",  test);

    expect(employee.officeNum()).toBe(test);
});