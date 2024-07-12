const dbService = require("../service/supplierDBService");

//insert supplier

const addSupplier = async (req, res) => {
  try {
    const { Company, Agent, Email, Contact, Address_Line1, Address_Line2 } =
      req.body;

    const Status = 1;
    const isDelete = 0;

    await dbService.insertSupplier(
      Company,
      Agent,
      Email,
      Contact,
      Address_Line1,
      Address_Line2,
      Status,
      isDelete
    );

    res.status(201).json({ message: "supplier inserted successfully" });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Error inserting users", error: err.message });
  }
};

//fetch all suppliers
const getSupplier = async (req, res) => {
  try {
    const supplier = await dbService.fetchSupplier();

    res.status(200).json(supplier);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Error fetching suppliers", error: err.message });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const { idSupplier } = req.params;
    const supplier = await dbService.fetchSupplierById(idSupplier);

    res.status(200).json(supplier);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Error fetching supplier", error: err.message });
  }
};

//supplier active and inactive
const changeSupplierStatus = async (req, res) => {
  try {
    const { idSupplier } = req.params;

    await dbService.updateSupplierStatus(idSupplier);

    res.status(200).json({ message: "Supplier status updated successfully" });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: " error updating supplier status", error: err.message });
  }
};

//soft delete for supplier
const deleteSupplier = async (req, res) => {
  try {
    const { idSupplier } = req.params;

    await dbService.deleteSupplier(idSupplier);

    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Error deleting supplier", error: err.message });
  }
};

module.exports = {
  addSupplier,
  getSupplier,
  getSupplierById,
  changeSupplierStatus,
  deleteSupplier,
};
