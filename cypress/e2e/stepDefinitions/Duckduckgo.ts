import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/duckduckgo/HomePage";

Given(/^I fill the search input with the "([^"]*)" term on the Search Engine page$/, function (value:string) {
    console.log("I fill the search input with the" + value )
    HomePage.fillSearch(value)
});

Given("I go to the Duckduckgo page", function () {
   HomePage.open()
});

When('I click on the search button on the Search Engine page', () => {
    HomePage.click()
});

Then("the text {string} should be visible on the result page on the Search Engine page", function (value) {
    console.log(`the text ${value} should be visible on the result page on the Search Engine page`);
});
