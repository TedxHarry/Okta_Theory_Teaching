import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve("docs");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
};
export function serve(port = Number(process.env.PORT || 4173)) {
  return http
    .createServer((req, res) => {
      const url = new URL(req.url, "http://localhost");
      if (url.pathname === "/") {
        res.writeHead(302, { Location: "/Okta_Theory_Teaching/" });
        res.end();
        return;
      }
      if (!url.pathname.startsWith("/Okta_Theory_Teaching/")) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      const relative = decodeURIComponent(
        url.pathname.slice("/Okta_Theory_Teaching/".length),
      );
      let file = path.resolve(root, relative);
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      if (fs.existsSync(file) && fs.statSync(file).isDirectory())
        file = path.join(file, "index.html");
      if (!fs.existsSync(file)) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end(fs.readFileSync(path.join(root, "404.html")));
        return;
      }
      res.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
      fs.createReadStream(file).pipe(res);
    })
    .listen(port, "127.0.0.1", () =>
      console.log(
        `Course preview: http://127.0.0.1:${port}/Okta_Theory_Teaching/`,
      ),
    );
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))
)
  serve();
