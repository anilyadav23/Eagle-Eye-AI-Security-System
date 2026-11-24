const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'screen_caps');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function captureScreenFlow() {
  console.log('Launching browser to capture Eagle Eye features...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Login Page on live cloud site
  const TARGET_URL = 'https://serene-gumdrop-10e07a.netlify.app';
  console.log('Navigating to Live Cloud Site at', TARGET_URL);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  // If password protected on netlify drop
  const pwdInput = await page.$('input[type="password"]');
  if (pwdInput) {
    console.log('Filling Netlify password...');
    await pwdInput.type('My-Drop-Site');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 3000));
  }

  await page.screenshot({ path: path.join(outDir, '01_login_portal.png') });

  // 2. Click HOD Profile & Login
  console.log('Logging in as HOD...');
  // Click Enter HOD Dashboard button
  const enterBtn = await page.$('button[type="submit"]') || await page.$('button');
  if (enterBtn) {
    await enterBtn.click();
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(outDir, '02_hod_dashboard.png') });
  }

  // 3. Switch to Attendance / Timetable tab if present
  console.log('Checking navigation tabs...');
  const buttons = await page.$$('button');
  for (const b of buttons) {
    const text = await (await b.getProperty('textContent')).jsonValue();
    if (text && text.toLowerCase().includes('attendance')) {
      await b.click();
      await new Promise(r => setTimeout(r, 1500));
      await page.screenshot({ path: path.join(outDir, '03_attendance_intelligence.png') });
      break;
    }
  }

  // 4. Switch to Floor Map / Blueprint
  for (const b of buttons) {
    const text = await (await b.getProperty('textContent')).jsonValue();
    if (text && (text.toLowerCase().includes('blueprint') || text.toLowerCase().includes('map'))) {
      await b.click();
      await new Promise(r => setTimeout(r, 1500));
      await page.screenshot({ path: path.join(outDir, '04_cctv_floor_matrix.png') });
      break;
    }
  }

  await browser.close();
  console.log('All screen captures saved successfully in', outDir);
}

captureScreenFlow().catch(console.error);
