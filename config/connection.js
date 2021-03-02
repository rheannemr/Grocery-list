// const mysql = require('mysql');
// const util = require('util');
// // require('dotenv').config();

// // if (process.env.JAWSDB_URL) {
// //     connection = mysql.createConnection(process.env.JAWSDB_URL);
// // } else {
// connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306, 
//     user: "root",
//     password: "Todayb4tomorrow",
//     database: "grocerylist_db"
// })

// connection.connect(function(err) {
//     if (err) {
//         console.error(`error connecting: ${err.stack}`);
//         return;
//     }
//     console.log(`connected as id ${connection.threadId}`);
//     }
// );

// connection.query = util.promisify(connection.query);

// module.exports = connection;