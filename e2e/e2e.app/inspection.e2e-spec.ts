import { $, browser } from 'protractor';

describe('Property Management Tests', () => {
  it('should open the property page', async () => {
    console.log('Opening /');
    await browser.get('/');
    console.log('Got it');
    const brandElement = $('.navbar-brand');
    const brandText = await brandElement.getText();
    expect(brandText).toEqual('Welcome to Easy Property Management!');
  });
});

