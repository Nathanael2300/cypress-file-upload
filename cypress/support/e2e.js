import "./commands";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Assignment to constant variable")) {
    return false;
  }
});
