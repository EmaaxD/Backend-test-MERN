const Clients = require("./../components/clients/network");

function Router(server) {
  server.use("/api/", Clients);
}

module.exports = Router;
