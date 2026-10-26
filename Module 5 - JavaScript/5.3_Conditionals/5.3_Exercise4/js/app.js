const action = "restart";

switch (action) {
  case "start":
    console.log("Game started");
    break;
  case "pause":
    console.log("Game paused");
    break;
  case "stop":
    console.log("Game stopped");
    break;
  case "restart":
    console.log("Game restarted");
    break;
  default:
    console.log("Invalid action");
    break;
}
