"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./Models/User");
var item_1 = require("./Models/item");
console.log("creation datasource");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "../db/bdd.sql",
    synchronize: true,
    entities: ["Models/*.ts"],
});
console.log(" created");
// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
var test = new item_1.item();
test.name = "geore";
console.log(test);
exports.AppDataSource.initialize()
    .then(function () {
    // here you can start to work with your database
    console.log("datasource initialized");
    //createUser();
    var me = new User_1.Bob("tom");
    me.name = "jeremy";
    me.discordID = "abramie";
})
    .catch(function (error) { return console.log(error); });
var PORT = 3000;
var app = (0, express_1.default)();
// Have Node serve the files for our built React app
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../client/build')));
app.get("/api", function (req, res) {
    res.json({ message: "Hello from server!" });
});
app.get(/(.*)/, function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
