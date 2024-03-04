const { parse } = require("url");
const { DOMAINS } = require('../../config')

const getDomainAlias = (hostName) => {
  let domainAlias;
  try {
    domainAlias = DOMAINS[hostName];
  } catch (_) {
    domainAlias = 'default';
  }
  return domainAlias || 'default';
};

const handleServer = (app, req, res) => {
  const handle = app.getRequestHandler();
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const domainAlias = process.argv[2] || getDomainAlias(req.headers.host);

  if (!pathname.includes("static")) {
    if (pathname === "/")
      app.render(req, res, `/${domainAlias}`, query);
    else if (pathname.includes("favicon.ico"))
      handle(req, res, { ...parsedUrl, pathname: `/${domainAlias}.ico` });
    else
      app.render(req, res, `/${domainAlias}${pathname}`, query);

  } else {
    handle(req, res, parsedUrl);
  }
};

module.exports = {
  handleServer,
};
