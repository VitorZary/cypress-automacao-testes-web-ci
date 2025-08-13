describe('Logout do usuário', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'));
    })

    it('deve fazer logout corretamente e redirecionar para a página principal', () => {
        cy.visit('/dashboard');
        cy.get('.sc-fLcnxK').click();
        cy.contains('Entrar').should('be.visible');
        cy.url().should('eq', 'http://localhost:3000/');
        cy.window().then((win) => {
            expect(win.localStorage.getItem('token')).to.be.null;
        });
        
  });
});
