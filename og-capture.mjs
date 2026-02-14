import { chromium } from 'playwright';

const browser = await chromium.launch();

// OG Image
const ogCtx = await browser.newContext({ viewport: { width: 1200, height: 630 } });
const ogPage = await ogCtx.newPage();
await ogPage.setContent(`
<html>
<body style="margin:0;width:1200px;height:630px;background:#0a0a0b;display:flex;align-items:center;justify-content:center;font-family:-apple-system,system-ui,sans-serif;">
  <div style="text-align:left;padding:80px;">
    <div style="display:inline-block;padding:6px 16px;background:rgba(109,159,255,0.1);border:1px solid rgba(109,159,255,0.2);border-radius:20px;font-size:16px;color:#6d9fff;margin-bottom:32px;">Available for work</div>
    <h1 style="margin:24px 0 20px;font-size:64px;font-weight:700;color:#e4e4e7;line-height:1.1;letter-spacing:-2px;">
      I build <span style="background:linear-gradient(135deg,#6d9fff,#b28dff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">AI-powered</span><br>web applications.
    </h1>
    <p style="font-size:22px;color:#8b8b94;line-height:1.6;max-width:600px;">Full-stack developer in Tokyo. LLM integration, real-time systems, and products that solve real problems.</p>
    <div style="margin-top:32px;display:flex;gap:12px;align-items:center;">
      <span style="font-size:18px;font-weight:600;color:#e4e4e7;">Ishaq Ibrahim</span>
      <span style="color:#3a3a40;">|</span>
      <span style="font-size:16px;color:#8b8b94;">github.com/Gentle-mann</span>
    </div>
  </div>
</body>
</html>
`);
await ogPage.screenshot({ path: 'og-image.png' });
await ogCtx.close();
console.log('OK: og-image');

// Tomato RAG placeholder
const tCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const tPage = await tCtx.newPage();
await tPage.setContent(`
<html>
<body style="margin:0;width:1280px;height:800px;background:linear-gradient(135deg,#0f1117 0%,#1a1d27 50%,#141416 100%);display:flex;align-items:center;justify-content:center;font-family:-apple-system,system-ui,sans-serif;">
  <div style="text-align:center;">
    <div style="font-size:48px;margin-bottom:16px;">🍅</div>
    <h1 style="font-size:36px;font-weight:700;color:#e4e4e7;letter-spacing:-1px;margin-bottom:12px;">Tomato RAG Chatbot</h1>
    <p style="font-size:18px;color:#8b8b94;max-width:500px;line-height:1.6;">Multilingual RAG pipeline with hybrid search, source-aware citations, and 300x cache speedup</p>
    <div style="margin-top:24px;display:flex;gap:8px;justify-content:center;">
      <span style="font-size:13px;padding:4px 12px;background:rgba(255,255,255,0.04);border:1px solid #2a2a2e;border-radius:4px;color:#8b8b94;">FastAPI</span>
      <span style="font-size:13px;padding:4px 12px;background:rgba(255,255,255,0.04);border:1px solid #2a2a2e;border-radius:4px;color:#8b8b94;">Qdrant</span>
      <span style="font-size:13px;padding:4px 12px;background:rgba(255,255,255,0.04);border:1px solid #2a2a2e;border-radius:4px;color:#8b8b94;">BGE-M3</span>
      <span style="font-size:13px;padding:4px 12px;background:rgba(255,255,255,0.04);border:1px solid #2a2a2e;border-radius:4px;color:#8b8b94;">Redis</span>
    </div>
  </div>
</body>
</html>
`);
await tPage.screenshot({ path: 'images/tomato-rag.png' });
await tCtx.close();
console.log('OK: tomato-rag placeholder');

await browser.close();
