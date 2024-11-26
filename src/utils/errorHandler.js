const errorHandler = (err, req, res, next) => {
  console.error(err);
  res
    .status(500)
    .json({ message: "Algo salió mal. Intenta de nuevo más tarde." });
};

module.exports = errorHandler;
