const {Pool} = require('pg');
const {user, host, database, password, port} = require('../secrets/db_configurations');

console.log(user, password)

const pool = new Pool({user, host, database, password, port});

module.exports = pool;
