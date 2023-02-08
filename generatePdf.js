const puppeteer = require('puppeteer')
const fs = require('fs')
const handlebars = require('handlebars')

const { puppeteerConfig, templates } = require('./config.js')
const { generatePdfName } = require('./generatePdfName.js')

exports.generatePdf = async ({ data, certificateName }) => {
  const selectedTemplate = templates[certificateName]
  const pdfName = generatePdfName(data.username, data.eventTitle)

  try {
    const browser = await puppeteer.launch({ ...puppeteerConfig.launch })
    const templateHtml = fs.readFileSync(selectedTemplate.html, 'utf-8')

    const template = handlebars.compile(templateHtml)
    const html = template(data)

    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: puppeteerConfig.waitUntil })

    //To reflect CSS used for screens instead of print
    await page.emulateMediaType(puppeteerConfig.emulateMediaType)
    await page.setUserAgent(puppeteerConfig.userAgent)
    await page.addStyleTag({ path: selectedTemplate.css })
    await page.evaluateHandle(puppeteerConfig.evaluateHandle)

    await page.pdf({
      path: `${pdfName}.pdf`,
      ...puppeteerConfig.pdf
    })

    await browser.close()
    process.exit()
  } catch (e) {
    console.log(e)
  }
}
