require('cypress-xpath');
require('cypress-iframe');
const { execute, load } = require("recaptcha-frontend");
describe('Acesso a pagina Sabesp', () => {
  it('Efetura login com sucesso', () => {
      cy.visit('https://sabesp-novaagv-hml.engdb.com.br/') , // { timeout: 50000}) 
      cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click()
      cy.get('.botao-aceitar').click()
      cy.get('#cpf').type('739.703.398-98')
      cy.get('#senha').type('@Sabesp4Win')
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
      cy.get('iframe')
      .first()
      .its('0.contentDocument.body')
      .should('not.be.undefined')
      .and('not.be.empty')
      .then(cy.wrap)
      .find('#recaptcha-anchor')
      .should('be.visible')
      .click();
      cy.get('#login-component_logar').click({force:true})
      cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click({force:true})
      cy.get('#selecao-endereco').click({force:true})
      cy.get('h1').should('contain', 'Agência Virtual')
      cy.get('#campo-selecao').click()
  })
  it.only('Consultar tela', () => {
    cy.visit('https://sabesp-novaagv-hml.engdb.com.br/') , // { timeout: 50000}
    cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click()
    cy.get('.botao-aceitar').click()
    cy.get('#cpf').type('739.703.398-98')
    cy.get('#senha').type('@Sabesp4Win')
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
    cy.get('#login-component_logar').click({force:true})
    cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click({force:true})
    cy.get('#selecao-endereco').click({force:true})
    cy.get('h1').should('contain', 'Agência Virtual')
    //cy.get('#campo-selecao').click({force:true})
    //cy.get('#campo-selecao-conteudo').should('contain', 'NENHUM ENDEREÇO ENCONTRADO')
  });
})