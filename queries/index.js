const departmentQueries = require("./departmentQueries");
const employeeQueries = require("./employeeQueries");
const roleQueries = require("./roleQueries");

module.exports = {...departmentQueries,...employeeQueries,...roleQueries};