import { connectDB } from "./connectDB";
import { ProductOrder } from "./schema/ProductOrder_Schema";
import ProductsOrderData from "../data/product-order.json";
import { connection } from "mongoose";

const function1 = async () => {
  await connectDB();
};

function1();

// ProductOrder.insertMany(ProductsOrderData)
//   .then((customers) => {
//     console.log("Customers Added: ", customers);
//   })
//   .catch((e) => console.log(e));

function insertingFunctions() {
  return new Promise((resolve) => {
    ProductOrder.insertMany(ProductsOrderData);
    //   .then((customers) => {
    //     console.log("Customers Added: ", customers);
    //   })
    //   .catch((e) => console.log(e));
  });
}

function aggregatingFunctions() {
  return new Promise((resolve) => {
    ProductOrder.aggregate([
      {
        $match: {
          ProductID: 868,
        },
      },
      {
        $group: {
          _id: 1,
          totalQuantity: {
            $sum: "$TotalOrderQuantity",
          },
        },
      },
    ]);
    //   .then((result) => {
    //     console.log("Successfully aggregated");
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  });
}

// console.log("Done with the insertion");

// ProductOrder.aggregate([
//   {
//     $match: {
//       ProductID: 868,
//     },
//   },
//   {
//     $group: {
//       _id: 1,
//       totalQuantity: {
//         $sum: "$TotalOrderQuantity",
//       },
//     },
//   },
// ])
//   .then((result) => {
//     console.log("Successfully aggregated");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function asyncCall() {
  console.log("Inserting Values!!");
  const result = await insertingFunctions();
  console.log("Done inserting");
  console.log(result);
}

asyncCall();

// connection.close();
