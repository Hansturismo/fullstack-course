let user = {
  username: "admin",
  password: "1234ab",
  attempts: 0,
  isLocked: false,
};

const userLogin = (usernameInput, passwordInput) => {
  if (user.isLocked) {
    return `Account locked, contact support to regain access`;
  }
  if (usernameInput == user.username && passwordInput == user.password) {
    user.attempts = 0;
    return `Login successful`;
  } else {
    user.attempts++;
    if (user.attempts >= 3) {
      user.isLocked = true;
      return `Too many unsuccessful attempts, account locked`;
    }
    return `Incorrect username or password`;
  }
};

console.log(userLogin("admin", "1234ab"));

console.log(userLogin("admin", "1234a"));
console.log(userLogin("admin", "1234a"));
console.log(userLogin("admin", "1234a"));

console.log(userLogin("admin", "1234a"));
