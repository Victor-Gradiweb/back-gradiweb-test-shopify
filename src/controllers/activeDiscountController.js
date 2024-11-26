const { getActiveDiscounts } = require("../services/activeDiscounts");

const getActiveDiscountsController = async (req, res) => {
  try {
    const discounts = await getActiveDiscounts();
    res.status(200).json(discounts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener descuentos 4" });
  }
};

module.exports = { getActiveDiscountsController };
