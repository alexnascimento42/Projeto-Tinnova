Feature: Exclusão do cadastro

    Apos Criar, consultar e editar realizarei a exclusão do mesmo.

    Scenario: Exclui cadastrado
     Given que estou na tela de cadastro
     When clico no botão para excluir
     And aparecer a mensagem de exclusão
     And clico no botão remover
     Then serei redirecionado para a primeira tela do site