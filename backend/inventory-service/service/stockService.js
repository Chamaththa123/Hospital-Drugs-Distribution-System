const db = require("../db/db");

const insertStock = (
  Date,
  Item_idItem,
  Transaction_ID,
  Transaction_Type,
  Sell_Price,
  IN_Stock,
  Out_Stock,
  SIH
) => {
  const query = `INSERT INTO stock_card
      (Date,Item_idItem, Transaction_ID,Transaction_Type, Sell_Price, IN_Stock, Out_Stock, SIH) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  return new Promise((resolve, reject) => {
    db.query(
      query,
      [
        Date,
        Item_idItem,
        Transaction_ID,
        Transaction_Type,
        Sell_Price,
        IN_Stock,
        Out_Stock,
        SIH,
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

module.exports = {
  insertStock,
};
