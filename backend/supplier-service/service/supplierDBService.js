const db = require("../db/db");

//insert supplier
const insertSupplier = (
  Company,
  Agent,
  Email,
  Contact,
  Address_Line1,
  Address_Line2,
  Status
) => {
  const query =
    "INSERT INTO supplier (Company,Agent,Email,Contact,Address_Line1,Address_Line2,Status) VALUES (?,?,?,?,?,?,?)";

  return new Promise((resolve, reject) => {
    db.query(
      query,
      [Company, Agent, Email, Contact, Address_Line1, Address_Line2, Status],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

//fetch supplier
const fetchSupplier = () => {
  const query = "SELECT * from supplier";
  return new Promise((resolve, reject) => {
    db.query(query, [], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

//fetch supplier by id
const fetchSupplierById = (idSupplier) => {
  const query = "SELECT * from supplier WHERE idSupplier = ?";
  return new Promise((resolve, reject) => {
    db.query(query, [idSupplier], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

//supplier active inactive
const updateSupplierStatus = (idSupplier) => {
  const query = `UPDATE supplier SET Status = CASE WHEN Status = 1 THEN 0 ELSE 1 END WHERE idSupplier= ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [idSupplier], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

//soft delete for supplier
const deleteSupplier = (idSupplier) => {
  const query = `UPDATE supplier SET isDelete = 1 WHERE idSupplier= ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [idSupplier], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

module.exports = {
  insertSupplier,
  fetchSupplier,
  fetchSupplierById,
  updateSupplierStatus,
  deleteSupplier,
};
