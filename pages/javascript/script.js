var unpurchasedItems = [];
var purchasedItems = [];

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; 
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function saveGame() {
        const gameData = {
          purchasedItems: purchasedItems,
          unpurchasedItems: unpurchasedItems,
          };
        localStorage.setItem('clickerGameData', JSON.stringify(gameData));
        document.getElementById("cart").innerHTML = JSON.stringify(gameData);
      }

function addSimon() {
  unpurchasedItems.push("Simon");
  saveGame();
}

function addClick() {
  unpurchasedItems.push("Click");
  saveGame();
}

function addPhishing() {
  unpurchasedItems.push("Phishing");
  saveGame();
}

// Function to toggle between light and dark mode made by Rohan the exquisite btw

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode"); // Toggle the dark-mode class on the body

  var button = document.getElementById("darkModeToggle");
  if (body.classList.contains("dark-mode")) {
      button.textContent = "Light Mode"; // Switch button text to 'Light Mode'
  } else {
      button.textContent = "Dark Mode"; // Switch button text back to 'Dark Mode'
  }
}

window.onload = function() {
  if (localStorage.getItem("darkModeEnabled") === "true") {
      document.body.classList.add("dark-mode");
      document.getElementById("darkModeToggle").textContent = "Light Mode";
  }
};

document.getElementById("darkModeToggle").addEventListener("click", function() {
  var isDarkModeEnabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkModeEnabled); // Save the preference
});
