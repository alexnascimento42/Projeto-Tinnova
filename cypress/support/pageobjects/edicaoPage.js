/// <reference types="cypress" />

import edicaoElements from "../elements/edicaoElements"
const EdicaoElements = new edicaoElements

class PageEdicao{
    acessarSite(){
        cy.visit('/')
        cy.get(EdicaoElements.botaoCadastro()).click({force: true})
    }
    
    btnEditar(){
        cy.get(EdicaoElements.botaoAlterar()).click()
    }

    rlzAlterar(){
        cy.get(EdicaoElements.realizaAlteracao())
          .clear()
          .type('Alex Nascimento')
    }

    btnAtualizar(){
        cy.get(EdicaoElements.botaoAtualizar()).click()
    }

    rtnTelaInicial(){
        cy.get(EdicaoElements.botaoTelaInicial()).click()
    }
 
}

export default PageEdicao;