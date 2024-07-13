const dbService = require("../service/productCategoryService");

//create category
const createCategory = async (req, res) => {
  try {
    const { Description } = req.body;
    await dbService.insertCategory(Description);
    res.status(201).json({
      message: "Category added successfully",
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating item", error: err.message });
  }
};

//get category
const getCategory = async (req, res) => {
  try {
    const category = await dbService.fetchCategory();
    res.status(200).json(category);
  } catch (err) {
    console.error("Error fetching category:", err);
    res
      .status(500)
      .json({ message: "Error fetching category", error: err.message });
  }
};

//update category
const updateCategoryById = async (req, res) => {
  try {
    const { idItem_Category } = req.params;
    const { Description } = req.body;
    await dbService.updateCategory(idItem_Category, Description);

    res.status(200).json({ message: "Category updated successfully" });
  } catch (err) {
    console.error("Error updating Category:", err);
    res
      .status(500)
      .json({ message: "Error updating Category", error: err.message });
  }
};

//delete category
const deleteCategoryById = async (req, res) => {
  try {
    const { idItem_Category } = req.params;

    const checkItemsInCategory = await dbService.fetchCategoryItems(
      idItem_Category
    );

    if (checkItemsInCategory.length === 0) {
      await dbService.deleteCategory(idItem_Category);

      res.status(200).json({ message: "Category deleted successfully" });
    } else {
      res.status(404).json({ message: "Category has Items" });
    }
  } catch (err) {
    console.error("Error deleting Category:", err);
    res
      .status(500)
      .json({ message: "Error deleting Category", error: err.message });
  }
};

module.exports = {
  createCategory,
  getCategory,
  updateCategoryById,
  deleteCategoryById,
};
