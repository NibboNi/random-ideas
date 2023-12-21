const express = require("express");
const port = 5000;

const app = express();

app.listen(port, () => {
  console.log(`Server Listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello && Welcome to RandomIdeas API :)" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);
