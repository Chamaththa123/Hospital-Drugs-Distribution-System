const db = require("../db/db");

const fetchUsers = () => {
  const query = `SELECT idUser,User_Name,Email,Tp,Role,Status from user WHERE status = 1`;
  return new Promise((resolve, reject) => {
    db.query(query, [], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

const updateUserStatus = (idUser) => {
  const query = `UPDATE user SET Status = CASE WHEN Status = 1 THEN 0 ELSE 1 END WHERE idUser= ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [idUser], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

const fetchUserById = (idUser) => {
  const query = `SELECT * FROM user WHERE idUser = ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [idUser], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(result)));
      }
    });
  });
};

module.exports = {
  fetchUsers,
  fetchUserById,
  updateUserStatus,
};
