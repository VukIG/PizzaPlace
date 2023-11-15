import Toppings from "../models/toppingsScheme.mjs";

export const getAllToppings = async (req, res) => {
  try {
    const toppings = await Toppings.find();
    res.status(200).json(toppings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
