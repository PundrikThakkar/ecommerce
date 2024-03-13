import mongoose, { Schema } from "mongose";

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
});

export const Cart = mongoose.model("Cart", cartSchema);
