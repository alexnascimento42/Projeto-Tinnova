/// <reference types="cypress" />

/*global, Given, Then, When*/

import acessoPage from '../pageobjects/acessoPage'
const PageAcesso = new acessoPage

Given('que acesso site da Tinnova', () => {
    PageAcesso.acessarSite()
})

When('valido a pagina', () => {
    PageAcesso.validarSite() 
})

Then('clico no botão entrar', () => {   
    PageAcesso.clicarBotaoCadastro()
}) 
