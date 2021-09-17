/// <reference types="cypress" />

describe("add to do", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  //tests server, db and front end
  it("should display to dos", () => {
    cy.get(".todo").should("contain", "water plants");
  });

  //to test front end only
  it("should display to dos with mock data", () => {
    cy.intercept("GET", "http://localhost:8080/todo", {
      fixture: "example_todo.json",
    });
    cy.get(".todo").should("contain", "water plants");
  });
});
