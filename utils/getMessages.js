const getMessages = (code) => {
  let message = "";

  switch (code) {
    case 11000:
      message = `No se puede repetir numero de documento o telefono`;
      break;

    default:
      message =
        "Error interno, verifique que tenga todos los parametros en orden.";
      break;
  }

  return message;
};

module.exports = {
  getMessages,
};
