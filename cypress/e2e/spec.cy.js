
describe('My Test', () => {
  it('Visits the homepage', () => {
    cy.visit('https://practicetestautomation.com/');
    cy.contains('Welcome to Practice Test Automation!').should('be.visible');
    cy.get('#menu-item-20').click();
    cy.get('a').contains('Test Login Page').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('Password123');
    cy.get('#submit').click();
    cy.contains('h1', 'Logged In Successfully').should('be.visible');
    cy.get('a').contains('Contact').click();
    cy.get('#wpforms-submit-161').click();

    // Reusable selectors
    const nameField = 'input#wpforms-161-field_0';
    const lastNameField = 'input#wpforms-161-field_0-last';
    const emailField = 'input#wpforms-161-field_1';
    const commentField = '#wpforms-161-field_2';

    // Asserting the Name Fields have error
    cy.get(nameField).should('have.class', 'wpforms-error');
    cy.get(`label[for="wpforms-161-field_0"]`).invoke('text').as('nameLabelText');

    // Asserting the Last Name Field has error
    cy.get(lastNameField).should('have.class', 'wpforms-error');
    cy.get(`label[for="wpforms-161-field_0-last"]`).invoke('text').as('lastNameLabelText');

    // Asserting the email field has error
    cy.get(emailField).should('have.class', 'wpforms-error');
    cy.get(`label[for="wpforms-161-field_1"]`).invoke('text').as('emailLabelText');

    // Asserting the Comment section has error
    cy.get(commentField).should('have.class', 'wpforms-error');
    cy.get(`label[for="wpforms-161-field_2"]`).invoke('text').as('commentLabelText');

    // Log label texts
    cy.get('@nameLabelText').then((text) => cy.log(`Name Label: ${text}`));
    cy.get('@lastNameLabelText').then((text) => cy.log(`Last Name Label: ${text}`));
    cy.get('@emailLabelText').then((text) => cy.log(`Email Label: ${text}`));
    cy.get('@commentLabelText').then((text) => cy.log(`Comment Label: ${text}`));
  });
});
