const mysql = require('mysql');
const util = require('util');
// require('dotenv').config();

connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    // password: "process.env.password",
    database: "burgers_db"
})

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
    }
);

connection.query = util.promisify(connection.query);

module.exports = connection;