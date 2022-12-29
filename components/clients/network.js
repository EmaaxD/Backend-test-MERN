const express = require("express");

const Controller = require("./controller");
const Response = require("./../response");

const router = express.Router();

// get all clients
router.get("/clients", async (req, res, next) => {
  try {
    const clients = await Controller.allClients();
    Response(req, res, 200, { amount: clients.length, clients });
  } catch (error) {
    console.error(error);
    Response(req, res, 400, { code: 400, message: error.message });
  }
});

// get one client by ID
router.get("/clients/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const client = await Controller.getClient(id);
    Response(req, res, 200, { client });
  } catch (error) {
    console.error(error);
    Response(req, res, 404, { code: 404, message: error.message });
  }
});

// save new cliente
router.post("/clients", async (req, res, next) => {
  const { body } = req;

  try {
    const client = await Controller.saveClient(body);
    Response(req, res, 201, {
      client,
      message: "Cliente creado correctamente!",
    });
  } catch (error) {
    Response(req, res, 400, { code: 400, message: error.message });
  }
});

// update client by ID
router.put("/clients", async (req, res, next) => {
  try {
    const { body } = req;

    const client = await Controller.updateClient(body);
    Response(req, res, 201, {
      client,
      message: "Cliente actualizado correctamente!",
    });
  } catch (error) {
    Response(req, res, 400, { code: 400, message: error.message });
  }
});

// delete clients by [Id]
router.post("/remove-clients", async (req, res, next) => {
  const { body } = req;

  try {
    await Controller.removeClients(body.clients);
    Response(req, res, 200, {
      message: "Se eliminaron correctamente los clientes!",
    });
  } catch (error) {
    Response(req, res, 400, { code: 400, message: error.message });
  }
});

// delete client by ID
router.delete("/clients/:id", async (req, res, next) => {
  const {
    params: { id },
  } = req;

  try {
    await Controller.deleteClient(id);
    Response(req, res, 200, {
      message: "Se elimino correctamente el cliente!",
    });
  } catch (error) {
    Response(req, res, 400, { code: 400, message: error.message });
  }
});

module.exports = router;
