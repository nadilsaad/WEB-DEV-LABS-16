const scoreInput = document.getElementById("scoreInput");
const calcBtn = document.getElementById("calcBtn");
const results = document.getElementById("results");

calcBtn.addEventListener("click", calculateGrade);

// Optional: Enter key support
scoreInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    calculateGrade();
  }
}); 

function calculateGrade() {
  let score = Number(scoreInput.value);

  // validation
  if (scoreInput.value === "" || isNaN(score) || score < 0 || score > 100) {
    results.innerHTML = " Please enter a valid score (0 - 100)";
    results.style.color = "red";
    return;
  }

  let grade = "";

  if (score >= 70) grade = "A";
  else if (score >= 60) grade = "B";
  else if (score >= 50) grade = "C";
  else if (score >= 40) grade = "D";
  else grade = "F";

  // output
  results.innerHTML = `
    Score: ${score} <br>
    Grade: ${grade}
  `;

  // optional color coding
  results.style.color =
    grade === "A" ? "green" :
    grade === "B" ? "blue" :
    grade === "C" ? "orange" :
    grade === "D" ? "purple" : "red";

  // reset input
  scoreInput.value = "";
  scoreInput.focus();
}