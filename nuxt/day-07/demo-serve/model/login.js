const { query } = require('../db/query')

module.exports.loginUser = async({ username }) => {
    return await query(`select * from user where u_name=?`, [username])
}