const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

async function getHTML(url) {
    try {
        const browser = await puppeteer.launch({
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
        });
    
        const page = await browser.newPage()
        await page.goto(url)
        const html = await page.content()
        await browser.close()
        return html
    } catch (error) {
        throw(error)
    }
}

module.exports = getHTML