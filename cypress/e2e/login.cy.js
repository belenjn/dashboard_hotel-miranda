describe("/login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("trying to navigate to rooms (private route) and returns to login because user is not authenticated", () => {
    cy.visit("http://localhost:3000/rooms");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });

  it("requires email", () => {
    cy.get("form").contains("Sign in").click();
  });

  it("requires password", () => {
    cy.get("[data-cy=user-input]").type("belen{enter}");
  });

  it("requires valid username and password", () => {
    cy.get("[data-cy=user-input]").type("belen");
    cy.get("[data-cy=password-input]").type("invalid{enter}");
  });

  it("navigates to home on successful login", () => {
    cy.get("[data-cy=user-input]").type("belen");
    cy.get("[data-cy=password-input]").type("1234");
    cy.get("[data-cy=submit]").click();
    cy.hash().should("eq", ""); //Obtiene el hash de la URL de la página que está actualmente activa.
  });
});
