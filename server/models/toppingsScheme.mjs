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

const toppingsScheme = mongoose.Schema({
    toppings:{
        type: [toppingSchema],
        required: true,
    }
})

const Toppings = mongoose.model('Toppings', toppingsScheme);
export default Toppings;