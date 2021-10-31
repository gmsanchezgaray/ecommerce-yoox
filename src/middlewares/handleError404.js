const errorNotFound = (req, res, next) => {
  res
    .status(400)
    .json({
      error: -2,
      descripcion: `ruta ${req.path} metodo ${req.method} no implementada.`,
    });
};
module.exports = errorNotFound;
