import "cypress-mochawesome-reporter/register";

describe("file-upload", () => {
  beforeEach(() => cy.visit("/"));
  it("Should upload a file and show one mensage 'File Uploaded!'", () => {
    cy.get('[data-testid="file-input"]').selectFile(
      "cypress/fixtures/text(test).txt"
    );
    cy.get("#fileSubmit").click();
    cy.get("h1").contains("File Uploaded!");
  });
});
