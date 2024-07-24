const dbService = require("../service/customerService");

const createCustomer = async (req, res) => {
  try {
    const { Name, Email, Tp } = req.body;

    const Status = 1;
    await dbService.insertCustomer(Name, Email, Tp, Status);

    res.status(201).json({
      message: "customer added successfully",
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating customer", error: err.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customer = await dbService.fetchCustomers();
    if (customer.length === 0) {
      return res.status(404).json({ message: "Customers not found" });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching customers",
      error: err.message,
    });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const { idCustomer } = req.params;
    const customer = await dbService.fetchCustomerById(idCustomer);
    if (customer.length === 0) {
      return res.status(404).json({ message: "customer not found" });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching customer",
      error: err.message,
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { idCustomer } = req.params;
    const { Name, Email, Tp } = req.body;
    await dbService.updateCustomer(Name, Email, Tp, idCustomer);

    res.status(200).json({ message: "customer updated successfully" });
  } catch (err) {
    console.error("Error updating customer:", err);
    res
      .status(500)
      .json({ message: "Error updating customer", error: err.message });
  }
};

// const updateCustomerStatus = async (req, res) => {
//   try {
//     const { idCustomer } = req.params;
//     const { S } = req.body;

//     const item = await dbService.fetchItemById(idItem);

//     let newQty = item[0].Qty + Qty;

//     await dbService.updateProductQty(newQty, idItem);

//     const date = new Date().toDateString();
//     const Transaction_Type = "Add Qty";
//     const Sell_Price = item[0].Rate;

//     let IN_Stock = Qty;
//     let Out_Stock = 0;
//     let SIH = newQty;

//     await stockDBService.insertStock(
//       date,
//       idItem,
//       idItem,
//       Transaction_Type,
//       Sell_Price,
//       IN_Stock,
//       Out_Stock,
//       SIH
//     );
//     res.status(200).json({ message: "Item qty updated successfully" });
//   } catch (err) {
//     console.error("Error updating Item qty:", err);
//     res
//       .status(500)
//       .json({ message: "Error updating Item qty", error: err.message });
//   }
// };

module.exports = {
  createCustomer,
  updateCustomer,
  getCustomers,
  getCustomerById,
};
