/// <reference types="cypress" />

/*global, Given, Then, When*/

import exclusaoPage from '../pageobjects/exclusaoPage'
const ExclusaoPage = new exclusaoPage

Given('que estou na tela de cadastro', () => {
    ExclusaoPage.acessarSite()
})

When('clico no botão para excluir', () => {
    ExclusaoPage.btnExcluir()
})

And('aparecer a mensagem de exclusão', () => {
    ExclusaoPage.msgExclusao()
})

And('clico no botão remover', () => {
    ExclusaoPage.btnRemover()
})

Then('serei redirecionado para a primeira tela do site', () => {
    ExclusaoPage.tlInicial()
})