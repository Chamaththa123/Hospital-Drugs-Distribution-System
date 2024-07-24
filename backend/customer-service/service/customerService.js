const db = require("../db/db");

const insertCustomer = (Name, Email, Tp, Status) => {
  const query = `INSERT INTO customer
      (Name,Email, Tp,Status)
      VALUES (?, ?, ?, ?)`;
  return new Promise((resolve, reject) => {
    db.query(query, [Name, Email, Tp, Status], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const fetchCustomers = () => {
  const query = "SELECT * FROM customer DESC";
  return new Promise((resolve, reject) => {
    db.query(query, [], (err, results) => {
      if (err) {
        console.error("Database query error: ", err);
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

const fetchCustomerById = (idCustomer) => {
  const query = "SELECT * FROM customer WHERE idCustomer = ?";
  return new Promise((resolve, reject) => {
    db.query(query, [idCustomer], (err, results) => {
      if (err) {
        console.error("Database query error: ", err);
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

const updateCustomer = (Name, Email, Tp, idCustomer) => {
  const query = `UPDATE customer 
      SET 
      Name=?, 
      Email =?,
    Tp =?
      WHERE idCustomer=?`;

  return new Promise((resolve, reject) => {
    return db.query(query, [Name, Email, Tp, idCustomer], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const updateCustomerStatus = (Status, idCustomer) => {
  const query = `UPDATE customer 
      SET 
      Status=? 
      WHERE idCustomer=?`;

  return new Promise((resolve, reject) => {
    return db.query(query, [Status, idCustomer], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  insertCustomer,
  fetchCustomers,
  fetchCustomerById,
  updateCustomer,
  updateCustomerStatus,
};
