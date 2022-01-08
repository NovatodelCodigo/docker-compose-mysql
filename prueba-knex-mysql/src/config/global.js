"use strict";

const parseConfig = require("../util/parseConfig.util");

const env = process.env.NODE_ENV;
 
if (env != "production") {
  const dotenv = require('dotenv');
  dotenv.config();
}
const config = parseConfig({
  globalPathPrefix: {
    doc: "microservicio de inventario",
    default: "/microservicio/v1/inventario-tk"
  },
  cabeceras: {
    doc: "listado de cabeceras obligatorias para todas las operaciones",
    default: [
      "xtrackid",
      "authorization",
      "url",
      "user-agent",
      "usuario"
    ]
  },
  env: {
    doc: "variable de entorno de la aplicación",
    env: "NODE_ENV",
    required: true
  },
  port: {
    doc: "puerto de aplicación",
    env: "PORT",
    required: true
  },
  // Desarrollo
  baseDatos: {
    client: {
      doc: "client de base de datos",
      env: "DEV_MYSQL_CLIENTDB",
      required: true
    },
    connection: {
      host: {
        doc: "host de base de datos",
        env: "DEV_MYSQL_HOSTDB",
        required: true
      },
      port: {
        doc: "puerto de base de datos",
        env: "DEV_MYSQL_PORTDB",
        required: true
      
			},
      user: {
        doc: "usuario de base de datos",
        env: "DEV_MYSQL_USERDB",
        required: true
      },
      password: {
        doc: "password de base de datos",
        env: "DEV_MYSQL_PASSWORDDB",
        required: true
      },
      database: {
        doc: "base de datos",
        env: "DEV_MYSQL_DATABASEDB",
        required: true
      }
    },
    pool: { 
      min: {
        doc: "pool min de base de datos",
        env: "DEV_MYSQL_POOLMINDB",
        required: true
      }, 
      max: {
        doc: "pool max de base de datos",
        env: "DEV_MYSQL_POOLMAXDB",
        required: true
      } 
    },
    acquireConnectionTimeout:  {
      doc: "timeout de base de datos",
      env: "DEV_MYSQL_TIMEOUTDB",
      required: true
    },
    migrations: {
      directory: {
        doc: "path para migrations de base de datos",
        env: "DEV_MYSQL_MIGRATIONS",
        required: true
      }
    },
    seeds: {
      directory: {
        doc: "path para seeds de base de datos",
        env: "DEV_MYSQL_SEEDS",
        required: true
      }
    }
  },
  // Local
  baseDatosLocal: {
    client: {
      doc: "client de base de datos",
      env: "LOCAL_MYSQL_CLIENTDB",
      required: true
    },
    connection: {
      host: {
        doc: "host de base de datos",
        env: "LOCAL_MYSQL_HOSTDB",
        required: true
      },
      port: {
        doc: "puerto de base de datos",
        env: "LOCAL_MYSQL_PORTDB",
        required: true
      },
      user: {
        doc: "usuario de base de datos",
        env: "LOCAL_MYSQL_USERDB",
        required: true
      },
      password: {
        doc: "password de base de datos",
        env: "LOCAL_MYSQL_PASSWORDDB",
        required: true
      },
      database: {
        doc: "base de datos",
        env: "LOCAL_MYSQL_DATABASEDB",
        required: true
      }
    },
    pool: { 
      min: {
        doc: "pool min de base de datos",
        env: "LOCAL_MYSQL_POOLMINDB",
        required: true
      }, 
      max: {
        doc: "pool max de base de datos",
        env: "LOCAL_MYSQL_POOLMAXDB",
        required: true
      } 
    },
    acquireConnectionTimeout:  {
      doc: "timeout de base de datos",
      env: "LOCAL_MYSQL_TIMEOUTDB",
      required: true
    },
    migrations: {
      directory: {
        doc: "path para migrations de base de datos",
        env: "LOCAL_MYSQL_MIGRATIONS",
        required: true
      }
    },
    seeds: {
      directory: {
        doc: "path para seeds de base de datos",
        env: "LOCAL_MYSQL_SEEDS",
        required: true
      }
    },
  }
});


module.exports=config;
