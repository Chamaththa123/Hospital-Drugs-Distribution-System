const db = require("../db/db");

const insertProduct = (
    Item_Category_idItem_Category,
    Item_Code,
    Item_Name,
    Description,
    Cost,
    Rate,
    Qty_Type,
    Qty,
    Expired_Date,
    Status
  ) => {
    const query = `INSERT INTO product
      (Item_Category_idItem_Category,Item_Code, Item_Name,Description, Cost, Rate, Qty_Type, Qty,Expired_Date,Status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [
          Item_Category_idItem_Category,
          Item_Code,
          Item_Name,
          Description,
          Cost,
          Rate,
          Qty_Type,
          Qty,
          Expired_Date,
          Status
        ],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  };

//   const fetchItems = () => {
//     const query =
//       "SELECT i.*, ic.Description AS Item_Category, qt.Description AS Quantity_Type FROM item i INNER JOIN quantity_type qt ON i.Qty_Type = qt.idQuantity_Type INNER JOIN item_category ic ON ic.idItem_Category = i.Item_Category_idItem_Category WHERE i.Branch_idBranch = ? AND i.Type = ? ORDER BY i.idItem DESC";
//     return new Promise((resolve, reject) => {
//       db.query(query, [Branch_idBranch, 1], (err, results) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(JSON.parse(JSON.stringify(results)));
//         }
//       });
//     });
//   };