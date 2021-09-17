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

  // use mock data so that we don't do a post requst to the actual db
  it("should diplay new to do card when add button is clicked with mock data", () => {
    cy.intercept("POST", "http://localhost:8080/todo/addNew", {
      statusCode: 200,
      body: "added",
    });

    cy.get("[class='add']").click();
  });
});
