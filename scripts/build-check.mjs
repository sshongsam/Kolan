import { access, readFile } from 'node:fs/promises';
const required = ['index.html', 'src/app.js', 'src/styles.css', '.env.example'];
for (const file of required) await access(file);
const html = await readFile('index.html', 'utf8');
if (!html.includes('src/app.js') || !html.includes('src/styles.css')) throw new Error('index.html must load app.js and styles.css');
console.log('Build check passed: static MCIRS preview assets are present.');
