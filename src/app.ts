import { connectDB } from "./connectDB";
import { ProductOrder } from "./schema/ProductOrder_Schema";
import ProductsOrderData from "../data/product-order.json";

const connectToDB = async () => {
  await connectDB();
};

function insertingFunctions() {
  return new Promise((resolve, reject) => {
    ProductOrder.insertMany(ProductsOrderData)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
}

function aggregatingFunctions() {
  return new Promise((resolve, reject) => {
    ProductOrder.aggregate([
      {
        $match: {
          ProductID: 868,
        },
      },
      {
        $group: {
          _id: "$ProductID",
          totalQuantity: {
            $sum: "$TotalOrderQuantity",
          },
        },
      },
    ])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
}

async function asyncCall() {
  await connectToDB();
  console.log("Inserting Values!!");
  const result1 = await insertingFunctions();
  console.log("Done inserting");
  // console.log(result1);
  const result2 = await aggregatingFunctions();
  console.log("Aggregating values");
  console.log(result2);
}

asyncCall();
