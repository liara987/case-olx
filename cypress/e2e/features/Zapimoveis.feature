@zapimoveis
Feature: Search engine on the Zap Imóveis website

  Background:
    Given I go to the Zap Imóveis page
    And I see "ZAP Imóveis" in the title

  @smoke
  //pesquisa por pronto para morar
  Scenario: Using the home page to search for "Pronta para morar"
    Given I click on the dropdown menu with title "Lançamentos"    
    And I click on the "Pronto para morar" option   
    Then the text "Pronto para morar" should be visible on the bottom part of the image result

  //pesquisa por alugar
  Scenario: Using the "Pronta para morar" page to filter for "Alugar"
    Given I am at the "Pronta para morar" page
    And I click on the "Alugar" button   
    Then the text "Imóveis para Alugar" should be visible on the page

  //pesquisa por lugares em são paulo
  Scenario: Using the "Pronta para morar" page to show places on "São Paulo"
    Given I am at the "Pronta para morar" page
    And I text on the search place field "São Paulo"
    And I click on the checkbox with the content "São Paulo - SP"
    Then the text "Imóveis para alugar em São Paulo - SP" should be visible on the page

  //pesquisa por cobertura
  Scenario: Using the "Pronta para morar" page to search for "Cobertura"
    Given I am at the "Pronta para morar" page
    And I click on the dropdown button with the title "Todos os imóveis"
    And I click on the checkbox with the span content "Cobertura"
    When I click on the submit button with the content "Buscar Imóveis"
    Then the text "Coberturas para alugar em São Paulo - SP" should be visible on the page

  //pesquisa por aceita pets
  Scenario: Using the "Pronta para morar" page to search for "Aceitar Pets"
    Given I am at the "Pronta para morar" page
    And I click on the checkbox with the span content "Aceita pets"
    When I click on the first result element
    Then the text "Animais permitidos" should be visible on the page

    Examples:
      | search_text | expected_text |
      | cypress     | cypress.io    |
      | javascript  | JavaScript    |
