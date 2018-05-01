// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, cb) {
        orm.create("burgers", cols, function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        orm.update("burgers", id, cb);
    }
}
module.exports = burger;