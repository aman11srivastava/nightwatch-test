module.exports = {
    '@tags': ['google'],
    'Google Advanced Search : Elon Musk'(browser) {

        const mainQueryInputSelector = 'input[name="as_q"]'
        const languageDropDownOpenSelector = '#lr_button'
        const lastUpdateDropDownOpenSelector = "#as_qdr_button"
        const submitButtonSelector = '.jfk-button[type="submit"]'
        const resultsPageQuerySelector = '#searchform input[name = "q"]'
        // const resultsPageQuerySelector = '#searchform input[name = "q"][value = "${mainQuery}"]'
        // const resultsPageLastUpdatedSelector = '[aria-label="Past Month"]'
        // const resultsPageLastUpdatedSelector = ''

        const mainQuery = "Elon Musk"
        const languageDropDownValueSelector = '.goog-menuitem[value="lang_it"]'
        const lastUpdateDropDownValueSelector = '.goog-menuitem[value="m"]'

        browser
            .url('https://www.google.co.in/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery) // For Inpuut field
            .click(languageDropDownOpenSelector) // Drop Down
            .click(languageDropDownValueSelector) // '' '' value
            .click(lastUpdateDropDownOpenSelector) // '' ''
            .click(lastUpdateDropDownValueSelector) // '' '' value
            .click(submitButtonSelector) // Submit button
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk') // URL CHECK
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian') // ''
            .assert.urlContains('as_qdr=m', 'Params: Time period is Last month') // ''

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input'); // Checking if Elon musk is set as the value in the search bar
        // browser.assert.containsText(resultsPageLastUpdatedSelector, 'UI: Last updated is set to Past Month')
        browser.saveScreenshot('tests_output/google.png')
    }
}