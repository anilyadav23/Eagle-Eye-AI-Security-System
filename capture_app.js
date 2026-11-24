const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'screen_caps');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Loading local app preview...');
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(outDir, '01_login_page.png') });
  console.log('Saved 01_login_page.png');

  // Click HOD Submit button
  const submitBtn = await page.$('button[type="submit"]') || (await page.$$('button'))[1];
  if (submitBtn) {
    await submitBtn.click();
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({ path: path.join(outDir, '02_hod_portal.png') });
    console.log('Saved 02_hod_portal.png');
  }

  // Browse different sections by clicking sidebar navigation items
  const navButtons = await page.$$('button');
  let count = 3;
  for (const b of navButtons) {
    const text = await (await b.getProperty('textContent')).jsonValue();
    if (text && (text.includes('Attendance') || text.includes('Timetable') || text.includes('AIOps') || text.includes('Map'))) {
      try {
        await b.click();
        await new Promise(r => setTimeout(r, 2000));
        const filename = `0${count}_${text.trim().toLowerCase().replace(/\s+/g, '_')}.png`;
        await page.screenshot({ path: path.join(outDir, filename) });
        console.log('Saved', filename);
        count++;
        if (count > 6) break;
      } catch (e) {}
    }
  }

  await browser.close();
  console.log('Done capturing live application frames!');
}

capture().catch(console.error);
