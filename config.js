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
    ? "https://lptrade-eleclabs-projects.vercel.app/api"
    : "http://localhost:3000/api";

const NEXTAUTH_SECRET = "GSFGS5566dhdhDHDH888";  //Your Secret
const GOOGLE_CLIENT_ID="1051833473520-0u00l10smfs7gn4agqajb05qd4jfkui8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="JpNPaXaDnU985DhyyUSMXlvT"

module.exports = {
  DB_URI, 
  API,
  NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
};