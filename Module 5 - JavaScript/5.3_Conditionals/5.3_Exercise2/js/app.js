const score = 78;

// If score is above 100, print invalid score
if (score > 100 || score < 0) {
  console.log("Invalid score");
}

// If score is more than 90 or above, print A
if (score >= 90 && score <= 100) {
  console.log("A");
}

// If score is between 80 and 89, print B
if (score >= 80 && score <= 89) {
  console.log("B");
}

// If score is between 70 and 79, print C
if (score >= 70 && score <= 79) {
  console.log("C");
}

// If score is between 60 and 69, print D
if (score >= 60 && score <= 69) {
  console.log("D");
}

// If score is between 0 and 59, print F
if (score >= 0 && score <= 59) {
  console.log("F");
}
