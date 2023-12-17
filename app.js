const express = require("express");
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tags: "Technology",
    username: "TonyStark",
    date: "2023-01-02",
  },
  {
    id: 2,
    text: "Milk cartons that turn a different color the older that your milk is getting",
    tags: "Inventions",
    username: "SteveRogers",
    date: "2023-01-02",
  },
  {
    id: 3,
    text: "ATM location app wich lets you know where the closest ATM is and if it is in service",
    tags: "Software",
    username: "BruceBanner",
    date: "2023-01-02",
  },
];

app.listen(port, () => {
  console.log(`Server Listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello && Welcome to RandomIdeas API :)" });
});

// Get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ succes: true, data: ideas });
});

// Get single idea
app.get("/api/ideas/:id", (req, res) => {
  const { id } = req.params;
  const idea = ideas.find((idea) => idea.id === +id);

  if (!idea)
    return res.status(404).json({ succes: false, error: "Resource not found" });

  res.json({ succes: true, data: idea });
});
