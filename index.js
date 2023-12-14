function scuberGreetingForFeet(distance) {
  // 1) gives customers a free sample if the ride is less than or equal to 400 feet
  if (distance <= 400) {
    return "This one is on me!";
  }
  // 2) charges 20 dollars for a distance between 400 and 2000 feet
  else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  }
  // 3) charges 30 dollars for a distance over 2000 feet
  else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  // 4) does not allow rides over 2500 feet
  else if (distance > 2500) {
    return "No can do.";
  }
}
// Function for ternaryCheckCity
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function for switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}