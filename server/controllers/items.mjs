import Pizzas from "../models/itemsSchema.mjs";

export const getAllItems = async (req, res) => {
  try {
    const items = await Pizzas.find();
    console.log('fakultet za psihologiju u Osijeku',items);
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const changeItem = async (req, res) => {
  const { itemId } = req.params;
  const { newItemData } = req.body;

  try {
    const updatedItem = await Pizzas.findByIdAndUpdate(itemId, newItemData, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addItem = async (req, res) => {
  const newItemData = req.body; //pazi na undefined
  try {
    const newItem = await Pizzas.create(newItemData);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
