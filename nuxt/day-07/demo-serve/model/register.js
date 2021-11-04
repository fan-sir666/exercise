const { query } = require('../db/query');

module.exports.registerUser = async({ username, password }) => {
    return await query(`insert into user(u_name,u_password) values ("${username}","${password}")`);
}