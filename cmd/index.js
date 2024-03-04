const { createServer } = require("http");
const { handleServer } = require("./utils");
const next = require("next");

function Run() {
  const dev = process.env.NODE_ENV !== "production";
  const app = next({ dev });
  const host = process.env.HOST ?? "localhost";
  const port = process.env.PORT ?? 3000;

  app.prepare().then(() => {
    createServer((req, res) => handleServer(app, req, res)).listen(
      { host, port },
      (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${host}:${port}`);
      }
    );
  });
}

module.exports = {
  Run,
};
