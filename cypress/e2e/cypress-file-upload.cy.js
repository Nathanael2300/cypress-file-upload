import "cypress-mochawesome-reporter/register";

describe("template spec", () => {
  beforeEach(() => cy.visit("/"));
  it("passes", () => {
    cy.get('[data-testid="file-input"]').selectFile(
      "cypress/fixtures/text(test).txt"
    );
    cy.get("#fileSubmit").click();
    cy.get("h1").contains("File Uploaded!");
  });
});
