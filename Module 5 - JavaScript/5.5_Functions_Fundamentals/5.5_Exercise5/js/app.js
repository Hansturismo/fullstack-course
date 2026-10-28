function gradeAverage(grades) {
  let numberOfGrades = 0;
  let gradeScoreTotal = 0;
  for (i of grades) {
    numberOfGrades++;
    gradeScoreTotal += i;
    if (i > 100) {
        return "Invalid grade scores"
    }
  }
  let averageScore = gradeScoreTotal / numberOfGrades;

  console.log(
    `Total grade score across ${numberOfGrades} classes: ${gradeScoreTotal}`,
  );
  if (averageScore >= 90) {
    console.log(`Final grade: A - ${averageScore}`);
  } else if (averageScore <= 89 && averageScore >= 80) {
    console.log(`Final grade: B - ${averageScore}`);
  } else if (averageScore <= 79 && averageScore >= 70) {
    console.log(`Final grade: C - ${averageScore}`);
  } else if (averageScore <= 69 && averageScore >= 60) {
    console.log(`Final grade: D - ${averageScore}`);
  } else {
    console.log("F");
  }
}

const grades = [100, 82, 91, 20, 63, 89];

console.log(gradeAverage(grades));
