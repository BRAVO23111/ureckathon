const textArray = ["Low Price", "No surge", "Less Time"]; // An array of text to display
let currentIndex = 0; // The index of the current text in the array
const changingText = document.getElementById("changing-text"); // Get the changing text element

// Set an interval to update the text every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % textArray.length; // Increment the index and loop back to 0 if necessary
  changingText.textContent = textArray[currentIndex]; // Set the text to the current index in the array
}, 3000);
