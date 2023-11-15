import mongoose from "mongoose";

const toppingSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  });

const itemsSchema = mongoose.Schema({
    "description":{
        type: String,
        required: true,
    },
    "id":{
        type: Number,
        required: true,
    },
    "imageUrl":{
        type: String,
        required: true,
    },
    "name":{
        type: String,
        required: true,
    },
    "price":{
        type: Number,
        required: true,
    },
    toppings: {
        type: [toppingSchema],
        required: false,
    },
})

const Items = mongoose.model('Pizzas', itemsSchema);
export default Items;