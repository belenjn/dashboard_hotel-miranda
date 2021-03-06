describe("/login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("trying to navigate to rooms (private route) and returns to login because user is not authenticated", () => {
    cy.visit("http://localhost:3000/rooms");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });

  it("invalid username", () => {
    cy.get("[data-cy=user-input]").type("hola");
    cy.get("[data-cy=password-input]").type("invalid{enter}");
    cy.get("div");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));

  });

  it("invalid password", () => {
    cy.get("[data-cy=user-input]").type("belen");
    cy.get("[data-cy=password-input]").type("invalid{enter}");
    cy.get("div");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));

  });

  it("navigates to home on successful login", () => {
    cy.get("[data-cy=user-input]").type("belen");
    cy.get("[data-cy=password-input]").type("1234");
    cy.get("[data-cy=submit]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
    
  });
});
