const templates = {
  certificate: {
    html: './templates/certificate/index.html',
    css: './templates/certificate/styles.css'
  }
}

const puppeteerConfig = {
  launch: {
    headless: 'chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  waitUntil: 'networkidle0',
  emulateMediaType: 'screen',
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
  evaluateHandle: 'document.fonts.ready',
  pdf: {
    printBackground: true,
    format: 'a2',
    landscape: true
  }
}

module.exports = {
  templates,
  puppeteerConfig
}
