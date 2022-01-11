let user = prompt("Speak");
let upperCase = user.toUpperCase();
let lowerCase = user.toLowerCase();

if (user === upperCase) {
  console.log("User is yelling");
} else if (user === lowerCase) {
  console.log("User is wishpering");
} else {
  console.log("User is talking normal");
}
