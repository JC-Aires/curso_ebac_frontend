/// <reference types="cypress" />

describe('Testes de inclusão, alteração e remoção de contato na agenda de contatos da EBAC', () => {

  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve adicionar um usuário na agenda de contatos', () => {
    cy.get('input[type = "text"]').type('jose aires');
    cy.get('input[type = "email"]').type('joseaires@citrix.com');
    cy.get('input[type = "tel"]').type('1112345678');
    cy.get('.adicionar').click();
  });

  it('Deve alterar um usuário na agenda de contatos', () => {
    cy.get('.edit').first().click();
    cy.get('input[type = "text"]').clear().type('GIAN SOUZA');
    cy.get('input[type = "email"]').clear().type('GIAN@ebac.com');
    cy.get('input[type = "tel"]').clear().type('1187654321');
    cy.get('.alterar').click();
  });

  it('Deve remover um usuário na agenda de contatos', () => {
    cy.get('.delete').first().click();
  });

})