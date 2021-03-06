const db = require("../db/connection");

// Select all departments
const selectAlldepartments = function() {
  const sql = `SELECT * FROM departments`;
  return db.promise().query(sql);
  // const sql = `SELECT * FROM departments`;
  // db.query(sql, (err, rows) => {
  //   if (err) {
  //     console.log({ error: err.message });
  //     return;
  //   }
  //   console.log({
  //     message: "success",
  //     data: rows,
  //   });
  //   cb();
  // });
};

// Select one department
const selectOnedepartment = function(id) {

  const sql = `SELECT * FROM departments WHERE id = ?`;
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
};

// Create new department
const createNewdepartment = function(body,cb) {

    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [body.name];
  
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

// Delete department
const deleteDepartment = function(name) {
  const departmentName = name.id;
  const sql = `DELETE FROM departments WHERE name = ?`;
  const params = [departmentName];
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err.message });
      // checks if anything was deleted
    } else if (!result.affectedRows) {
      console.log({
        message: "Department not found",
      });
    } else {
      console.log({
        message: "deleted",
        changes: result.affectedRows,
        name: departmentName
      });
    }
  });
  // const sql = `DELETE FROM departments WHERE id = ?`;
  // const params = [id];
  // db.query(sql, params, (err, result) => {
  //   if (err) {
  //     console.log({ error: err.message });
  //     // checks if anything was deleted
  //   } else if (!result.affectedRows) {
  //     console.log({
  //       message: "Department not found",
  //     });
  //   } else {
  //     console.log({
  //       message: "deleted",
  //       changes: result.affectedRows,
  //       id: id,
  //     });
  //   }
  // });
};

module.exports = {selectAlldepartments,selectOnedepartment,createNewdepartment,deleteDepartment};
