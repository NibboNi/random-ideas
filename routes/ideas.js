const express = require("express");
const router = express.Router();

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

// Get all ideas
router.get("/", (req, res) => {
  res.json({ succes: true, data: ideas });
});

// Get single idea
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const idea = ideas.find((idea) => idea.id === +id);

  if (!idea)
    return res.status(404).json({ succes: false, error: "Resource not found" });

  res.json({ succes: true, data: idea });
});

// Add and idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ succes: true, data: idea });
});

module.exports = router;
