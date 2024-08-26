let score = prompt("Enter exam score");
score = Number(score);
if (score < 100 && score >= 85) {
  console.log("You got an A");
} else if (score < 85 && score >= 75) {
  console.log("You got an B");
} else if (score < 75 && score >= 65) {
  console.log("You got an C");
} else if (score < 65 && score >= 50) {
  console.log("You got an D");
} else if (score < 50 && score >= 0) {
  console.log("You got an F");
} else if (score > 100 || score < 0) {
  console.log("Invalid Score");
} else if (isNaN(score)) {
  console.log("Not a Number");
} else if (score == 100) {
  console.log("Perfect Score");
}
