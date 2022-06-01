import { model, Schema } from "mongoose";

interface IProductOrder {
  CustomerID: number;
  LastName: string;
  FirstName: string;
  EmailAddress: string;
  ProductID: number;
  TotalOrderQuantity: number;
}

const ProductSchema = new Schema<IProductOrder>({
  CustomerID: {
    type: Number,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  EmailAddress: {
    type: String,
    required: true,
  },
  ProductID: {
    type: Number,
    required: true,
  },
  TotalOrderQuantity: {
    type: Number,
    required: true,
  },
});

const ProductOrder = model<IProductOrder>("ProductOrder", ProductSchema);

export { ProductOrder };
