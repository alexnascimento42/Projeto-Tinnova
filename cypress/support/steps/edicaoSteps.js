/// <reference types="cypress" />

/*global, Given, Then, When*/

import edicaoPage from '../pageobjects/edicaoPage'
const PageEdicao = new edicaoPage

Given('que estou na tela de cadastro', () => {
   PageEdicao.acessarSite()
})

When('clico no botão para alterar', () => {
    PageEdicao.btnEditar()
})

And('realizo a alteração', () => {
    PageEdicao.rlzAlterar()
})

And('clico no botão atualizar', () => {
    PageEdicao.btnAtualizar()
})

Then('retorno para a tela inicial', () => {
    PageEdicao.rtnTelaInicial()
})