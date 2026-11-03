const speedCheck = (speed, speedLimit) => {
  let penaltyPoints = 0;
  let speedOverLimit = speed - speedLimit;

  if (speed <= speedLimit) {
    return "Speed OK";
  } else if (speedOverLimit < 5) {
    return "Slow down!";
  } else if (speedOverLimit >= 5) {
    penaltyPoints = speedOverLimit / 5;
    if (penaltyPoints < 12) {
      return `Above limit, accumulated penalty points: ${penaltyPoints}`;
    }
    if (penaltyPoints > 12) {
      return `License suspended, penalty points exceeds limit of 12. Current penalty points: ${penaltyPoints}`;
    }
  }
};
console.log(speedCheck(80, 60));
