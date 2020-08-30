// import { AppPage } from './app.po';
import { browser, logging } from 'protractor'

describe('workspace-project App', () => {
  // let page: AppPage

  beforeEach(() => {
    // page = new AppPage()
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER)
    const errorLog = { level: logging.Level.SEVERE }
    expect(logs).not.toContain(jasmine.objectContaining(errorLog as logging.Entry))
  })
})