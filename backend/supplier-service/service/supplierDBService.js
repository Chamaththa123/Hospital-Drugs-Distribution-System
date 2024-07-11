const { fetchUserById } = require("../../user-service/service/authDBService");
const db = require("../db/db");

//insert supplier
const insertSupplier = (
  Company,
  Agent,
  Email,
  Contact,
  Address_Line1,
  Address_Line2
) => {
  const query =
    "INSERT INTO supplier (Company,Agent,Email,Contact,Address_Line1,Address_Line2) VALUES (?,?,?,?,?,?)";

  return new Promise((resolve, reject) => {
    db.query(query, [Company,
        Agent,
        Email,
        Contact,
        Address_Line1,
        Address_Line2], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//fetch supplier
const fetchSupplier = () => {
    const query = 'SELECT * from supplier WHERE idSupplier = ?';
return new Promise((resolve,reject) =>{
    db.query(query,[],(err,results) =>{
        if(err){
            reject(err);
        }else{
            resolve(results);
        }
    })
})
};

//fetch supplier by id
const fetchSupplierById = (idSupplier) =>{
    const query = 'SELECT * from supplier WHERE idSupplier = ?';
    return new Promise((resolve,reject) =>{
        db.query(query,[idSupplier],(err,results) =>{
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        })
    })
};

module.exports = { insertSupplier,fetchSupplier,fetchUserById };
