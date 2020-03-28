const connection = require("./connection.js");

const orm = {
    selectAll: (table_name, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table_name], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table_name, colName, inputName, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        cb(queryString);
        connection.query(queryString, [table_name, colName, inputName], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table_name, colName, updateValue, idColName, idValue, cb) => {
        const queryString = "UPDATE ?? SET ??=? WHERE ??=?";

        connection.query(queryString, [table_name, colName, updateValue, idColName, idValue], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
