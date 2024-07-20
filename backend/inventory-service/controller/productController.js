const dbService = require("../service/productService");
const stockDBService = require("../service/stockService");

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

    const product = await dbService.insertProduct(
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

    const date = new Date().toDateString();
    const Item_idItem = product.insertId;
    const Transaction_ID = product.insertId;
    const Transaction_Type = "PRODUCT";
    const Sell_Price = Rate;

    let IN_Stock = Qty;
    let Out_Stock = 0;
    let SIH = Qty;

    await stockDBService.insertStock(
      date,
      Item_idItem,
      Transaction_ID,
      Transaction_Type,
      Sell_Price,
      IN_Stock,
      Out_Stock,
      SIH
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
    const products = await dbService.fetchItems();
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

const getProductById = async (req, res) => {
  try {
    const { idItem } = req.params;
    const products = await dbService.fetchItemById(idItem);
    if (products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
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

    const item = await dbService.fetchItemById(idItem);

    let newQty = item[0].Qty + Qty;

    await dbService.updateProductQty(newQty, idItem);

    const date = new Date().toDateString();
    const Transaction_Type = "Add Qty";
    const Sell_Price = item[0].Rate;

    let IN_Stock = Qty;
    let Out_Stock = 0;
    let SIH = newQty;

    await stockDBService.insertStock(
      date,
      idItem,
      idItem,
      Transaction_Type,
      Sell_Price,
      IN_Stock,
      Out_Stock,
      SIH
    );
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
  getProductById,
};
