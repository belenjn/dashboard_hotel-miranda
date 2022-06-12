describe("/login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("requires email", () => {
    cy.get("form").contains("Sign in").click();
  });

  it("requires password", () => {
    cy.get("[data-cy=user-input]").type("belen@hotel.com{enter}");
  });

  it("requires valid username and password", () => {
    cy.get("[data-cy=user-input]").type("belen@hotel.com");
    cy.get("[data-cy=password-input]").type("invalid{enter}");
  });

  it("navigates to home on successful login", () => {
    cy.get("[data-cy=user-input]").type("belen@hotel.com");
    cy.get("[data-cy=password-input]").type("1234");
    cy.get("[data-cy=submit]").click();
    cy.hash().should("eq", "");
  });
});
