const { getDiscounts } = require("../services/shopifyService");

const getDiscountsController = async (req, res) => {
  try {
    const discounts = await getDiscounts();
    res.status(200).json(discounts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener descuentos 4" });
  }
};

module.exports = { getDiscountsController };
