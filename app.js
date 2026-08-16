const express = require("express");
const Logger = require("./middleware/logger");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const port = 3000;

const tasks = [];

app.use(express.json());

app.use(Logger);

app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Task app listening at http://localhost:${port}`);
});
