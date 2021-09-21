/// <reference types="Cypress" />

describe('/pages/app/login/', () => {
    // it === teste que estamos fazendo
    it('Preencha os campos e vá para a página /app/profile', () => {
        cy.visit('/app/login/');

        // document.querySelector('input[name="usuario"])
        // preencha o input de usuário
        cy.get('#registrationForm input[name="usuario"]').type('filipegbessa');

        // preencha o input de senha
        cy.get('#registrationForm input[name="senha"]').type('senhaSegura');

        // clicar no botão de submit
        cy.get('#registrationForm button[type="submit"]').click();

        // verificar se estamos na página /app/profile
        cy.url().should('include', '/app/profile');



        // preencher o input de usuário
        // preencher o input de senha
        // clicar no botão de submit

        // verificar que a página /app/profile foi carregada
    })
});