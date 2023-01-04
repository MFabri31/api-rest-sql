const express = require("express");
const app = express();
const db = require("./dbConnection/dbConnection");

app.use(express.json());

app.use(require("./routes/index.routes"));
app.use(require("./routes/users.routes"));
app.use(require("./routes/tasks.routes"));
app.use(require("./routes/roles.routes"));

db.sync()
  .then(() => {
    console.log("Connection successful.");
  })
  .catch(() => {
    console.log("There's an error with the connection to the database.");
  });

const PORT = 3500;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
