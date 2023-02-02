describe("Todo Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("displays todo list correctly", () => {
    cy.get('[data-cy="todo"]').should("be.visible");
    cy.get(".todo__items").within(() => {
      cy.get(".list").should("be.visible");
      cy.get(".list__item").should("have.length", 30);
    });
    cy.get(".todo__footer").should("contain", "Task Board by Nikhil D Anand");
  });

  it("checks the todo item", () => {
    cy.get(".list__item-checkbox").first().check();
    cy.get(".list__item-checkbox").should("have.length", 29);
    cy.get(".board__grid").should("have.length", 1);
  });
});
