const Item = require('../model/Item');
const mongoose = require('mongoose');

const addItem = async (req, res) => {
  const { name, type, description} = req.body;
  try {
    const item = await Item.create({
      name,
      type,
      description,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const viewItems = async (req, res) => {
  const data = await Item.find({});
  res.status(200).json(data);
};

const viewItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid Item ID' });
  }

  const data = await Item.findById(id);

  if (!data) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.status(200).json(data);
};

module.exports = {
  addItem,
  viewItems,
  viewItem,
};