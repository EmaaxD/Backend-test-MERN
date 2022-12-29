const mongoose = require("mongoose");

const Model = require("./model");
const { getMessages } = require("./../../utils/getMessages");

const allClients = () =>
  new Promise(async (resolve, reject) => {
    try {
      const clients = await Model.find();

      resolve(clients);
    } catch (error) {
      reject({ error: "Internal Errors: /allClients/ " });
    }
  });

const getClient = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!mongoose.isValidObjectId(id)) {
        reject({ message: "id del cliente, no valido" });
        return;
      }

      const client = await Model.findById({ _id: id });
      resolve(client);
    } catch (error) {
      console.log("error.code", error.code);
      reject(error);
    }
  });

const saveClient = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const saveClientDB = new Model(data);
      await saveClientDB.save();

      resolve(saveClientDB);
      return;
    } catch (error) {
      reject({ message: getMessages(error.code) });
    }
  });

const updateClient = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!mongoose.isValidObjectId(id)) {
        reject({ message: "id del cliente, no valido" });
        return;
      }

      const client = await Model.findByIdAndUpdate(id, data, { new: true });
      resolve(client);
    } catch (error) {
      reject(error);
    }
  });

const removeClients = (clients) =>
  new Promise(async (resolve, reject) => {
    try {
      await Model.deleteMany({ _id: { $in: clients } });

      resolve("deleted");
    } catch (error) {
      reject(error);
    }
  });

const deleteClient = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!mongoose.isValidObjectId(id)) {
        reject({ message: "id del cliente, no valido" });
        return;
      }

      await Model.findByIdAndDelete(id);
      resolve("deleted");
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  allClients,
  getClient,
  saveClient,
  updateClient,
  removeClients,
  deleteClient,
};
