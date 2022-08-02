const Engineer = require("../lib/engineer");

it("adds role to engineer object with employeeRole()", () => {
    const test = "Engineer";
    const employee = new Engineer("Jon", 1234, "jon@email.com", test);

    expect(employee.employeeRole()).toBe(test);
});
it("adds github username to engineer object with gitHubUserName()", () => {
    const test = "github username";
    const employee = new Engineer("Jon", 1234, "jon@email.com",  test);

    expect(employee.gitHubUserName()).toBe(test);
});