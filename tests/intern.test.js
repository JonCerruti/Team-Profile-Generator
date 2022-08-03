const Intern = require("../lib/intern");

it("Set school name", () => {
    const test = "Stanford";
    const employee = new Intern("Stephanie", 123456, "stephanie@email.com", test);
    expect(employee.school).toBe(test);
  });
  it("adds role to engineer object with employeeRole()", () => {
    const test = "Intern";
    const employee = new Intern("Stephanie", 123456, "stephanie@email.com", test);

    expect(employee.employeeRole()).toBe(test);
});
it("adds github username to engineer object with gitHubUserName()", () => {
    const test = "Stanford";
    const employee = new Intern("Stephanie", 123456, "stephanie@email.com",  test);

    expect(employee.schoolName()).toBe(test);
});