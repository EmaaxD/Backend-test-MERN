const Store = require("./store");

const allClients = () =>
  new Promise(async (resolve, reject) => {
    try {
      const clients = await Store.allClients();

      resolve(clients);
    } catch (error) {
      reject(error);
    }
  });

const getClient = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const client = await Store.getClient(id);
      resolve(client);
    } catch (error) {
      reject(error);
    }
  });

const saveClient = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const client = await Store.saveClient(data);
      resolve(client);
      return;
    } catch (error) {
      reject(error);
    }
  });

const updateClient = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { _id: id } = data;
      delete data._id;

      const client = await Store.updateClient(id, data);
      resolve(client);
    } catch (error) {
      reject(error);
    }
  });

const deleteClient = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const client = await Store.deleteClient(id);
      resolve(client);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  allClients,
  getClient,
  saveClient,
  updateClient,
  deleteClient,
};
