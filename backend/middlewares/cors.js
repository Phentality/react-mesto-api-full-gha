const allowedCors = [
  'https://phentality.nomoredomainsrocks.ru',
  'http://phentality.nomoredomainsrocks.ru',
  'https://api.phentality.nomoredomainsrocks.ru',
  'http://api.phentality.nomoredomainsrocks.ru',
];

// eslint-disable-next-line consistent-return
const cors = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credential', true);
  }
  const { method } = req;

  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    // eslint-disable-next-line no-undef
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  next();
};

module.exports = cors;
