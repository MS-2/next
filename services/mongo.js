import mongoose from "mongoose";
import ENV from "../env/variables.js";

export default mongoose
  .connect(ENV.MONGODB_URI, {
    serverApi: { strict: true, deprecationErrors: true, version: "1" },
  })
  .then((db) =>
    console.log(
      "conectado a mongo : ",
      db.connection.host + ":" + db.connection.port
    )
  )
  .catch((error) => console.log(error));
