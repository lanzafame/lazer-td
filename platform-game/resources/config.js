// games config

var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

var environment = args.env || "test";

var common_conf = {
  name: "lanzafame platform-mmo",
  version: "0.0.1",
  environment: environment,
  max_player: 100,
  data_paths: {
    items: __dirname + "/game_data/" + "items/",
    maps: __dirname + "/game_data/" + "maps/"
  },
  starting_zone: "rm_map_home"
};

var conf = {
  production: {
    ip: args.ip || "0.0.0.0",
    port: args.port || 8081,
    database: "mongodb://127.0.0.1/platform_mmo_prod"
  },

  test: {
    ip: args.ip || "0.0.0.0",
    port: args.port || 8082,
    database: "mongodb://127.0.0.1/platform_mmo_test"
  }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];
