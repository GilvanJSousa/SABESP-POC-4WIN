require('cypress-xpath');
describe('Acesso a pagina Sabesp', () => {
  it('Acessar a pagina da Sabesp', () => {
      cy.visit('https://agenciavirtual.sabesp.com.br') , // { timeout: 60000}) 
      cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click()
      cy.get('.botao-aceitar').click()
      cy.get('#cpf').type('739.703.398-98')
      cy.get('#senha').type('@Sabesp4Win')
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
      cy.get('iframe[src*=recaptcha]')
      .its('0.contentDocument')
      .should(d => d.getElementById('recaptcha-token').click())
      cy.get('[style="z-index: 2000000000; position: relative; width: 400px; height: 580px;"] > iframe').click()
  })
})