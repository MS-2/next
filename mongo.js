import mongoose from "mongoose";

export default mongoose 
  .connect("mongodb://localhost/next", {})
  .then((db) =>
    console.log(
      "conectado a mongo : ",
      db.connection.host + ":" + db.connection.port
    )
  )
  .catch((error) => console.log(error));
