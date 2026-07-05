// Build the single-file distribution:
//  1. inline content.js into index.html
//  2. render the study-pack PDF from the app's print view (Chromium)
//  3. embed the PDF as base64 so the in-app PDF button downloads it directly
//     (window.print() is blocked in some webviews, e.g. KakaoTalk)
//
// Usage: node scripts/build.mjs   (requires: npm i -D playwright)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(root, "dist");
fs.mkdirSync(distDir, { recursive: true });

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const content = fs.readFileSync(path.join(root, "content.js"), "utf8");
const merged = html.replace(
  '<script src="content.js"></script>',
  "<script>\n" + content + "\n</script>"
);

const tempPath = path.join(distDir, ".temp-nopdf.html");
fs.writeFileSync(tempPath, merged);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.addInitScript(() => { window.print = () => {}; });
await page.goto("file://" + tempPath);
await page.click("#pdfBtn"); // no embedded PDF yet -> builds the print view
await page.waitForTimeout(300);
const pdfPath = path.join(distDir, "kolan-study-pack.pdf");
await page.pdf({ path: pdfPath, format: "A4", printBackground: true });
await browser.close();
fs.unlinkSync(tempPath);

const b64 = fs.readFileSync(pdfPath).toString("base64");
const final = merged.replace(
  "</body>",
  '<script>window.KOLAN_PDF_B64="' + b64 + '";</script>\n</body>'
);
const outPath = path.join(distDir, "kolan-campus-korean-v1.3-free.html");
fs.writeFileSync(outPath, final);
console.log("built:", outPath, "+", pdfPath);
