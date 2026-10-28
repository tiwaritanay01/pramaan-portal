import puppeteer from 'puppeteer-core';
import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';

async function generateEditedPPTX() {
  console.log('Connecting to local dev server via Chrome...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  
  console.log('Navigating to http://127.0.0.1:5173/ ...');
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0', timeout: 30000 });

  // Hide the sticky navbar and footer during slide capture for pure slide frames
  await page.evaluate(() => {
    const nav = document.querySelector('.presentation-nav');
    if (nav) nav.style.display = 'none';
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
    // Remove margin/padding around slides for clean export
    const container = document.querySelector('.spa-container');
    if (container) {
      container.style.padding = '0';
      container.style.maxWidth = '1920px';
      container.style.width = '1920px';
      container.style.gap = '2rem';
    }
  });

  // Give 1 second for webfonts & icons to settle
  await new Promise(r => setTimeout(r, 1500));

  const slideIds = ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6'];
  const slideBuffers = [];

  for (let i = 0; i < slideIds.length; i++) {
    const id = slideIds[i];
    console.log(`Capturing #${id} ...`);
    const slideElem = await page.$(`#${id}`);
    if (!slideElem) {
      console.warn(`Element #${id} not found!`);
      continue;
    }
    const buffer = await slideElem.screenshot({ type: 'png' });
    slideBuffers.push({ id, buffer });
  }

  await browser.close();
  console.log(`Captured ${slideBuffers.length} slides.`);

  // Create PPTX Presentation
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Team Galacticos';
  pptx.company = 'Smart India Hackathon 2026';
  pptx.title = 'AI-Powered Emergency Response Coordination - Galacticos';
  pptx.subject = 'SIH 2026 Idea Presentation - Open Innovation';

  for (let i = 0; i < slideBuffers.length; i++) {
    const { id, buffer } = slideBuffers[i];
    const slide = pptx.addSlide();
    const base64Data = buffer.toString('base64');
    
    // Fit image to slide 16:9 (10 x 5.625 inches in default pptxgenjs layout)
    slide.addImage({
      data: `image/png;base64,${base64Data}`,
      x: 0,
      y: 0,
      w: 10,
      h: 5.625,
      sizing: { type: 'contain', w: 10, h: 5.625 }
    });
  }

  const outputEdited = path.resolve('public/assets/Galacticos_SIH2026_Edited_Presentation.pptx');
  const outputMain = path.resolve('public/assets/Galacticos_SIH2026_Presentation.pptx');

  await pptx.writeFile({ fileName: outputEdited });
  console.log(`Successfully generated: ${outputEdited}`);

  // Also copy to Galacticos_SIH2026_Presentation.pptx so existing links automatically download the edited presentation
  fs.copyFileSync(outputEdited, outputMain);
  console.log(`Copied edited presentation to: ${outputMain}`);
}

generateEditedPPTX().catch(err => {
  console.error('Error generating PPTX:', err);
  process.exit(1);
});
