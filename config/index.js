const DOMAINS = {
  [process.env.NHUONG_QUYEN_DOMAIN ?? "localhost:3000"]: 'domain1',
  [process.env.TIN_TUC_DOMAIN ?? "localhost:3030"]: "domain2",
};

module.exports = {
  DOMAINS,
};
