
describe('to do app', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')
  })

  it('displays the text "To do App"', () => {
    cy.get('[data-cy=todo]').contains('To do App', { matchCase: false })
  })
})
