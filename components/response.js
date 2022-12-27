module.exports = function (req, res, statusCode = 200, data) {
  res.status(statusCode).json(data);
};
