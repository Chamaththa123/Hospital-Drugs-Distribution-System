const dbService = require("../service/productService");
const { currentDate } = require("../utils/currentData");

const createProduct = async (req, res) => {
  try {
    const {
      Item_Category_idItem_Category,
      Item_Code,
      Item_Name,
      Description,
      Cost,
      Rate,
      Qty_Type,
      Qty,
      Expired_Date,
      Status,
    } = req.body;

    await dbService.insertProduct(
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
    );
    res.status(201).json({
      message: "item added successfully",
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating item", error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await dbService.fetchItems;
    if (products.length === 0) {
      return res.status(404).json({ message: "Products not found" });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching products",
      error: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { idItem } = req.params;
    const {
      Item_Category_idItem_Category,
      Item_Code,
      Item_Name,
      Description,
      Cost,
      Rate,
      Qty_Type,
      Qty,
      Expired_Date,
    } = req.body;
    await dbService.updateProduct(
      Item_Category_idItem_Category,
      Item_Code,
      Item_Name,
      Description,
      Cost,
      Rate,
      Qty_Type,
      Qty,
      Expired_Date,
      idItem
    );

    res.status(200).json({ message: "Item updated successfully" });
  } catch (err) {
    console.error("Error updating Item:", err);
    res
      .status(500)
      .json({ message: "Error updating Item", error: err.message });
  }
};

const updateProductQty = async (req, res) => {
  try {
    const { idItem } = req.params;
    const { Qty } = req.body;

    await dbService.updateProductQty(Qty, idItem);
    res.status(200).json({ message: "Item qty updated successfully" });
  } catch (err) {
    console.error("Error updating Item qty:", err);
    res
      .status(500)
      .json({ message: "Error updating Item qty", error: err.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getProducts,
  updateProductQty,
};
