import { browser } from 'protractor'

export class AppPage {
  async navigateTo (): Promise<unknown> {
    const baseUrl = await browser.get(browser.baseUrl)
    return baseUrl
  }
}
