/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("locate elements with get", () => {
    // get all elements by tag name
    cy.get("button");

    // get all elements by class name
    cy.get(".bin");

    //get all elements by specific attributes (e.g. class, type)
    cy.get("[class='add']");
  });

  // contains method only gets one element
  it("locate elements with contains", () => {
    // get (one) element by text
    cy.contains("add");
  });

  it("locate elements with find", () => {
    // get the child component
    cy.get("div").find("h3");
  });
});
