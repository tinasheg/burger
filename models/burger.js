const orm = require("../config/orm.js");

const burger = {
    selectAll: () => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (value, cb) => {
        orm.insertOne("burgers", "burger_name", value, (res) => {
            cb(res);
        });
    },

    updateOne: (idValue, cb) => {
        orm.updateOne("burgers", "devoured", true, "id", idValue, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;