const Engineer = require("../lib/engineer");

it("Set Github username", () => {
    const test = "alex@github.com";
    const employee = new Engineer("Alex", 1234, "alex@email.com", test);
    expect(employee.gitHub).toBe(test);
  });
  it("adds role to engineer object with employeeRole()", () => {
    const test = "Engineer";
    const employee = new Engineer("Jon", 1234, "alex@email.com", test);

    expect(employee.employeeRole()).toBe(test);
});
it("adds github username to engineer object with gitHubUserName()", () => {
    const test = "alex@github.com";
    const employee = new Engineer("Jon", 1234, "alex@email.com",  test);

    expect(employee.gitHubUserName()).toBe(test);
});