const DOMAINS = {
  [process.env.NHUONG_QUYEN_DOMAIN ?? "localhost:3000"]: 'NhuongQuyen',
  [process.env.TIN_TUC_DOMAIN ?? "localhost:3030"]: "TinTuc",
};

module.exports = {
  DOMAINS,
};
