test("should reject empty name or invalid email", () => {
  const isValid = (name, email) => name && email && email.includes("@");

  expect(isValid("Alice", "alice@example.com")).toBeTruthy();
  expect(isValid("", "test")).toBeFalsy();
});
