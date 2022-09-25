/// <reference types="cypress" />

import acessoElements from '../elements/acessoElements'
const AcessoElements = new acessoElements

class PageAcesso {

    acessarSite(){
        cy.visit('/')
    }

    validarSite(){
        cy.get(AcessoElements.validacaoSite())
        .should('contain','Boa sorte, e divirta-se no processo, isso é uma experiência. aproveite ao máximo')
    }

    clicarBotaoCadastro(){
        cy.get(AcessoElements.botaoCadastro()).click({force: true})
    }
   
}

export default PageAcesso;