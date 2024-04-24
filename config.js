// config.js
const DB_URI = "mongodb+srv://somkiat:6Eba0874@cluster0.l2npy.gcp.mongodb.net/lptrade?retryWrites=true&w=majority";
/*
const DB_URI =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://somkiat:6Eba0874@cluster0.l2npy.gcp.mongodb.net/lptrade?retryWrites=true&w=majority"
    : "mongodb://localhost:27017/lptrade";
*/

const API =
  process.env.NODE_ENV === "production"
    ? "https://xxx.vercel.com/api"
    : "http://localhost:3000/api";


module.exports = {
  DB_URI,
  API,
};