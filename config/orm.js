const connection = require("./connection.js");

const orm = {
    selectAll: (table_name) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table_name], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: (table_name, name) => {
        const queryString = "INSERT INTO ?? VALUES (?)";
        console.log(queryString);
        connection.query(queryString, [table_name, name], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: (table_name, colName, updateValue, idColName, id) => {
        const queryString = "UPDATE ?? SET ??=? WHERE ??=?";

        connection.query(queryString, [table_name, colName, updateValue, idColName, id], (err, result) => {
            if (err) throw err;
            console.log(result);
        }
        );
    }
};

module.exports = orm;
