const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve frontend

// Workout Generator API
app.post("/generate", (req, res) => {
  const { energy_level, available_time, goal } = req.body;

  let exercises = [];

  if (goal === "Strength") {
    if (energy_level === "High") {
      exercises = ["Push-ups", "Squats", "Burpees", "Plank"];
    } else if (energy_level === "Medium") {
      exercises = ["Push-ups", "Lunges", "Plank"];
    } else {
      exercises = ["Wall Sit", "Glute Bridge"];
    }
  } else if (goal === "Cardio") {
    if (energy_level === "High") {
      exercises = ["Jumping Jacks", "High Knees", "Mountain Climbers"];
    } else if (energy_level === "Medium") {
      exercises = ["Jog in Place", "Butt Kicks"];
    } else {
      exercises = ["Walking", "Slow March"];
    }
  } else if (goal === "Flexibility") {
    if (energy_level === "High") {
      exercises = ["Yoga Flow", "Dynamic Stretching"];
    } else if (energy_level === "Medium") {
      exercises = ["Cat-Cow Stretch", "Child’s Pose"];
    } else {
      exercises = ["Neck Rolls", "Seated Forward Bend"];
    }
  }

  res.json({
    duration: available_time,
    exercises: exercises
  });
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
