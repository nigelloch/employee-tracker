const db = require("../../db/connection");

// Select all employees
const selectAllemployees = function(cb) {

  const sql = `SELECT * FROM employees ORDER BY last_name`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: rows,
    });
    cb();
  });
};

// Select one employee
const selectOneemployee = function(id,cb) {

  const sql = `SELECT * FROM employees WHERE id = ?`;
  const params = [id];

  db.query(sql, params, (err, row) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: row,
    });
    cb();
  });
};

// Create new employee
const createNewemployee = function(body,cb) {

  const sql = `INSERT INTO employees (first_name, last_name) VALUES (?,?,?)`;
  const params = [body.first_name, body.last_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: body,
    });
    cb();
  });
};

// Update employee
const updateEmployee = function(id,body,cb) {

  const sql = `UPDATE employees SET first_name = ? WHERE id = ?`;
  const params = [body.first_name, id];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err.message });
    } else if (!result.affectedRows) {
      console.log({
        message: "Employee not found",
      });
    } else {
      console.log({
        message: "success",
        data: body,
        changes: result.affectedRows,
      });
    }
    cb();
  });
};

// Delete employee
const deleteEmployee = function(id,cb) {

  const sql = `DELETE FROM employees WHERE id = ?`;

  db.query(sql, id, (err, result) => {
    if (err) {
      console.log({ error: err });
    } else if (!result.affectedRows) {
      console.log({
        message: "Employee not found",
      });
    } else {
      console.log({
        message: "deleted",
        changes: result.affectedRows,
        id: id,
      });
    }
    cb();
  });
};

module.exports = {selectAllemployees,selectOneemployee,createNewemployee,updateEmployee,deleteEmployee};
