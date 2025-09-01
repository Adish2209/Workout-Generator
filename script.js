async function generateWorkout() {
  const energy = document.getElementById("energy").value;
  const time = document.getElementById("time").value;
  const goal = document.getElementById("goal").value;

  const res = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      energy_level: energy,
      available_time: parseInt(time),
      goal: goal
    })
  });

  const data = await res.json();

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block"; // show result box

  resultDiv.innerHTML = `
    <h2>✨ Your Workout Plan ✨</h2>
    <p><b>Duration:</b> ${data.duration} minutes</p>
    <ul>${data.exercises.map(ex => `<li>${ex}</li>`).join("")}</ul>
  `;
}
