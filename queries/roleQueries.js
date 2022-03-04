const db = require("../../db/connection");

// Select all roles
const getRoles = function() {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: rows,
    });
  });
}


// Select one role
const getOnerole = function(id) {

  const sql = `SELECT * FROM roles WHERE id = ?`;
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
  });
}

// Create new role
const createNewrole = function(body) {

    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log({ error: err.message });
        return;
      }
      console.log({
        message: "success",
        data: body,
      });
    });
  }

// Update employee
const updateRole = function(id,body,cb) {

  const sql = `UPDATE roles SET title = ? WHERE id = ?`;
  const params = [body.title, id];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err.message });
    } else if (!result.affectedRows) {
      console.log({
        message: "Role not found",
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
  

// Delete a role
const deleteRole = function(id) {

  const sql = `DELETE FROM roles WHERE id = ?`;
  const params = [id];
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err });
      // checks if anything was deleted
    } else if (!result.affectedRows) {
      console.log({
        message: "Role not found",
      });
    } else {
      console.log({
        message: "deleted",
        changes: result.affectedRows,
        id: id,
      });
    }
  });
}

module.exports = {getRoles,getOnerole,createNewrole,deleteRole};