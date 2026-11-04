function verifyUser(usernameInput, passwordInput) {
  const username = "admin";
  const password = "1234abcd";

  if (username == usernameInput && password == passwordInput) {
    console.log("Login successful ");
  } else if (
    usernameInput == null ||
    passwordInput == null ||
    usernameInput == "" ||
    passwordInput == ""
  ) {
    console.log("Invalid input");
  } else if (username !== usernameInput || password !== passwordInput) {
    console.log("Wrong username or password");
  }
}

const usernameInput = prompt();
const passwordInput = prompt();

verifyUser(usernameInput, passwordInput);
