import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8'};
const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${port}`);
  const safe = normalize(url.pathname).replace(/^([/\\])+/, '');
  const file = join(root, safe || 'index.html');
  try {
    const body = await readFile(file);
    res.writeHead(200, {'content-type': types[extname(file)] || 'application/octet-stream'});
    res.end(body);
  } catch {
    const body = await readFile(join(root, 'index.html'));
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    res.end(body);
  }
});
server.listen(port, '0.0.0.0', () => console.log(`MCIRS preview running at http://localhost:${port}`));
