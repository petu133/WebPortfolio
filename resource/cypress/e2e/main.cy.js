/// <reference types="Cypress" />

describe('template spec', () => {
  beforeEach(() =>{
    cy.visit(Cypress.env('url'))
  })

  it('check image size', () => {
    cy.get('.left-header > .image > img').should("be.visible")
    .should(([img]) => {
      expect(img.naturalWidth).to.equal(408);
      expect(img.naturalHeight).equal(612);
    })
  })

  it('main url display', () => {
    cy.title().should('contain', 'Portfolio')
  })

  it('name of the person stands out', () => {
    cy.get('[data-cy="person-name"]').should('have.css', 'color', 'rgb(39, 174, 96)')
    cy.get('[data-person-name="person-name"]').should('have.css', 'color', 'rgb(39, 174, 96)')
  })



  
})