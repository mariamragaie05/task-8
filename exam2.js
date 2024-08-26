let score = prompt("Enter exam score");
score = Number(score);
switch (true) {
  case score == 100:
    console.log("Perfect Score");
    break;
  case score < 100 && score >= 85:
    console.log("You got a A");
    break;
  case score < 85 && score >= 75:
    console.log("You got a B");
    break;
  case score < 75 && score >= 65:
    console.log("You got a C");
    break;
  case score < 65 && score >= 50:
    console.log("You got a D");
    break;
  case score < 50 && score >= 0:
    console.log("You got a F");
    break;
  case score > 100 || score < 0:
    console.log("Invalid Score");
    break;
  case isNaN(score):
    console.log("Not a Number");
    break;
}
