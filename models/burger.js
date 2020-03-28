const orm = require("../config/orm.js");

const burger = {
    selectAll: () => {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: (value, cb) => {
        orm.insertOne("burgers", "burger_name", value, function (res) {
            cb(res);
        });
    },

    updateOne: (idValue, cb) => {
        orm.updateOne("burgers", "devoured", 1, "id", idValue, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;