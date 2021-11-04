const mysql = require("mysql");
let pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "lxi",
    user: "root",
    password: "123456",
});

const query = (sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) reject(err);
            else {
                connection.query(sql, val, (err, fields) => {
                    if (err) reject(err);
                    else resolve(fields);
                    connection.release();
                });
            }
        });
    });
};
exports.query = query;