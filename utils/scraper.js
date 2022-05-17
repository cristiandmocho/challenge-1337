import { closeSync, writeFileSync } from 'fs';
import { join } from 'path';
import puppeteer from 'puppeteer';

const ScrapingURL = 'https://tretton37.com';

export function saveScrapedData(data) {}

export async function scrapeData() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(ScrapingURL + '/meet');

    // Primary data
    process.stdout.write('\nScraping primary data...');

    const primary = await page.evaluate(() => {
      const ninjas = Array.from(document.querySelectorAll('.ninja-summary')).map((el, i) => {
        const ninja = {
          id: i + 1,
          name: el.querySelector('.contact-info h1 a').childNodes[0].textContent,
          city: el.querySelector('.contact-info h1 a').childNodes[1].textContent.split(' ')[1],
          country: el.querySelector('.contact-info h1 a').childNodes[1].textContent.split(' ')[0],
          text: null,
          imagePortraitUrl: el.querySelector('img.portrait').getAttribute('src'),
          imageWallOfLeetUrl: null,
          profileURL: location.origin + el.querySelector('.ninja-nav a').getAttribute('href'),
        };

        return ninja;
      });

      return ninjas;
    });

    process.stdout.write('Done!\n\nScraping complementary data');

    // Complementary data
    for (const row of primary) {
      process.stdout.write('.');

      await page.goto(row.profileURL);

      const extra = await page.evaluate(() => {
        return {
          text: document.querySelector('.main-ninja-text').innerHTML,
          imageWallOfLeetUrl: document.querySelector('article svg image').getAttribute('xlink:href'),
        };
      });

      Object.assign(row, extra);
    }

    console.log('\nFinished successfully!');

    writeFileSync(join(process.cwd(), 'data', 'saved-data.json'), JSON.stringify(primary), 'utf-8');

    await browser.close();
  } catch (err) {
    console.log(err);
    return err;
  }
}
