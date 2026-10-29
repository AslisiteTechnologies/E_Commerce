import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,resolve,sep} from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.xml':'application/xml','.txt':'text/plain'};
createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const candidate=resolve(root,`.${pathname}`);const path=candidate.startsWith(root+sep)||candidate===root?candidate:resolve(root,'index.html');let body;try{body=await readFile(path)}catch{body=await readFile(resolve(root,'index.html'))}res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-store'});res.end(body)}catch{res.writeHead(500);res.end('Preview server error')}}).listen(4178,'127.0.0.1',()=>console.log('Nove preview at http://127.0.0.1:4178'));
