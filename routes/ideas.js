const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// Get all ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ succes: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: "Something went wrong :/" });
  }
});

// Get single idea
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const idea = await Idea.findById(id);
    res.json({ succes: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: "Something went wrong :/" });
  }
});

// Add and idea
router.post("/", async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const newIdea = await idea.save();
    res.json({ succes: true, data: newIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, data: "Something went wrong :/" });
  }
});

// Update idea
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedIdea = await Idea.findByIdAndUpdate(
      id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );
    res.json({ succes: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, data: "Something went wrong :/" });
  }
});

// Delete idea
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Idea.findByIdAndDelete(id);

    res.json({ succes: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, data: "Something went wrong :/" });
  }
});

module.exports = router;
