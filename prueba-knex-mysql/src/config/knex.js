const knexfile = require("./../../knexfile");

const env = process.env.NODE_ENV;
let conexion = knexfile.development;

if (env == "local") {
    conexion = knexfile.local;
} else if (env == "development") {
    conexion = knexfile.development;
}

module.exports = require("knex")(conexion);
