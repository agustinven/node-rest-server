import response from "express";

const usuariosGet = (req, res = response) => {
  const { q, nombre, apikey } = req.query;

  res.json({
    msg: "get API-controller",
    q,
    nombre,
    apikey,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post API-controller",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.status(400).json({
    msg: "put API-controller",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.status(200).json({
    msg: "patch API-controller",
  });
};

const usuariosDelete = (req, res = response) => {
  res.status(400).json({
    msg: "delete API-controller",
  });
};

export {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
