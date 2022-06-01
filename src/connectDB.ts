import { connect } from "mongoose";

const url: string =
  "mongodb+srv://KeyToHerHeart:KeyToHerHeart@dmddmongodb.mpwnt.mongodb.net/DMDD?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await connect(url);
    console.log("Successfully connected to the url");
  } catch (error) {
    console.log("Error connecting to the MongoDB Server");
    console.log(error);
  }
}

export { connectDB };
