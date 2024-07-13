const db = require("../db/db");

const insertCategory = (Description) => {
  const query = "INSERT INTO product_category (Description) VALUES (?)";

  return new Promise((resolve, reject) => {
    db.query(query, [Description], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const fetchCategory = () => {
  const query = "SELECT * FROM product_category";
  return new Promise((resolve, reject) => {
    db.query(query, [Branch_idBranch], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

const fetchCategoryItems = (idItem_Category) => {
  const query = "SELECT * FROM product WHERE Item_Category_idItem_Category = ?";
  return new Promise((resolve, reject) => {
    db.query(query, [idItem_Category], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(JSON.stringify(results)));
      }
    });
  });
};

const updateCategory = (idItem_Category, Description) => {
  const query = `UPDATE product_category SET Description=? WHERE idItem_Category=?`;

  return db.query(query, [Description, idItem_Category]);
};

const deleteCategory = (idItem_Category) => {
  const query = `DELETE FROM product_category WHERE idItem_Category=?`;
  return db.query(query, [idItem_Category]);
};

module.exports = {
  insertCategory,
  fetchCategory,
  fetchCategoryItems,
  updateCategory,
  deleteCategory,
};
