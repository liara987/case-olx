import {defineConfig} from "cypress";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {createEsbuildPlugin} from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    defaultCommandTimeout: 10000,
    e2e: {
        baseUrl: "https://www.zapimoveis.com.br/",
        supportFile: "cypress/support/e2e.js",
        fixturesFolder: "cypress/fixtures",
        screenshotsFolder: "cypress/screenshots",
        videosFolder: "cypress/videos",
        specPattern: "cypress/e2e/**/*.feature",
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config)
            on('file:preprocessor', createBundler({
                plugins: [createEsbuildPlugin(config)],
            }));
            return config;
        },
    }
})
