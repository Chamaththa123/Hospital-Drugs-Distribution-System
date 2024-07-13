const db = require("../db/db");

//insert category
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

//fetch category
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

//get category items
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

//update category details
const updateCategory = (idItem_Category, Description) => {
  const query = `UPDATE product_category SET Description=? WHERE idItem_Category=?`;

  return db.query(query, [Description, idItem_Category]);
};

//delete category
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
