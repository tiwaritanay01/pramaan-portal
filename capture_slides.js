import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const nav = document.querySelector('.presentation-nav');
    if (nav) nav.style.display = 'none';
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
    const container = document.querySelector('.spa-container');
    if (container) {
      container.style.padding = '0';
      container.style.maxWidth = '1920px';
      container.style.width = '1920px';
    }
  });
  await new Promise(r => setTimeout(r, 1000));
  for (let i = 1; i <= 6; i++) {
    const el = await page.$('#slide-' + i);
    if (el) {
      await el.screenshot({ path: `public/slide_${i}_preview.png` });
      console.log(`Saved slide_${i}_preview.png`);
    }
  }
  await browser.close();
}
capture().catch(console.error);
