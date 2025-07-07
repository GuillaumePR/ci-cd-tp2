describe("Form Submission", () => {
  it("Submits form and displays submissions", () => {
    cy.visit("/");
    cy.get('input[name="name"]').type("Alice");
    cy.get('input[name="email"]').type("alice@example.com");
    cy.get("form").submit();

    cy.request("/submissions").then((response) => {
      expect(response.status).to.eq(200);

      const found = response.body.some(
        (entry) => entry.name === "Alice" && entry.email === "alice@example.com"
      );

      expect(found).to.be.true;
    });
  });
});
