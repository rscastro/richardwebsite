function param(req, name) {
  const params = req.params || {};
  const query = req.query || {};
  const body = req.body || {};

  if (null != params[name] && params.hasOwnProperty(name)) { return params[name]; }
  if (null != body[name]) { return body[name]; }
  if (null != query[name]) { return query[name]; }
}

module.exports = {
  param
}
