import express from "express";
import next from "next";
import connectDB from './mongo.js'

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  console.log("🚀 ~ server.get ~ this runs before frontend:");


    // Conectar a MongoDB Atlas
    connectDB

  // Rutas de Express y demás configuraciones...

  server.get("*", (req, res) => {
    console.log("🚀 ~ server.get ~ 2:");
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
