import { chromium } from 'playwright';

const projects = [
  { name: 'crisis-memory-bridge', url: 'https://web-production-b1d2c.up.railway.app/' },
  { name: 'shieldagent', url: 'https://shieldagent-hackathon-jvbnsbtsbmxbtcdvhsnzkd.streamlit.app/' },
  { name: 'mama-kokoro', url: 'https://mama-kokoro.vercel.app' },
  { name: 'neolocal', url: 'https://neolocal.vercel.app/' },
  { name: 'yuyu-nihongo', url: 'https://yuyu-nihongo-website.vercel.app/' },
];

const browser = await chromium.launch();

for (const p of projects) {
  try {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await ctx.newPage();
    await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `images/${p.name}.png`, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    await ctx.close();
    console.log(`OK: ${p.name}`);
  } catch (e) {
    console.log(`FAIL: ${p.name} — ${e.message}`);
  }
}

await browser.close();
