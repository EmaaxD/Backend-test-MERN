BACKEND TEST MERN

proyecto hecho en: NodeJS, Express, MongoDB y Mongoose

Rutas de la API

allClientes: GET /api/clients,

oneClientByID: GET /api/clients/:id,

createClient: POST /api/clients => {
"name": [string, required],
"documentNum": [string, required, uniqued]
"address": [string, required],
"phone": [int, required, uniqued]
},

updateClient: PUT /api/clients => {
"\_id": required,
cualquier campo se puede actualizar
},

deleteClient: DELETE /api/clients/:id

Todo empieza en el archivo 'server.js',

los metodos get,post,put y delete estan dentro de /components/clients/network.js
