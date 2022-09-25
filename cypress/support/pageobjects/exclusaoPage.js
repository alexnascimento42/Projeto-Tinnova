/// <reference types="cypress" />

import exclusaoElements from '../elements/exclusaoElements'
const ExclusaoElements = new exclusaoElements

class PageExclusao{
    acessarSite(){
        cy.visit('/')
        cy.get(ExclusaoElements.botaoCadastro()).click({force: true})
    } 

    btnExcluir(){
        cy.get(ExclusaoElements.botaoExcluir()).click()
    }

    msgExclusao(){
        cy.get(ExclusaoElements.mensagemExcluir())
          .should('have.text', 'Deseja mesmo remover?') 
    }

    btnRemover(){
        cy.get(ExclusaoElements.botaoRemover()).click()
    }

    tlInicial(){
        cy.get(ExclusaoElements.telaInicial()).click({force: true})
    }

}

export default PageExclusao;