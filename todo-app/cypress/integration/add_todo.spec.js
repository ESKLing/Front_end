/// <reference types="cypress" />

describe("add to do", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  //   it("should diplay new to do card when add button is clicked", () => {
  //     cy.get("input").type("make dinner");
  //     cy.get("[class='add']").click();
  //     cy.contains("make dinner").should("be.visible");
  //     // asserts that the to do card is visible after the first two steps are completed
  //   });

  // mock post request so we don't interact with the db
  it("should send expected data as a (mock) post request", () => {
    cy.intercept("POST", "http://localhost:8080/todo/addNew", {}).as(
      "new_todo"
    );

    cy.get("input").type("eat lunch");
    cy.get(".add").click();

    cy.wait("@new_todo").its("request.body.name").should("eq", "eat lunch");
  });
});
