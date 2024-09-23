// Function to toggle between light and dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode"); // Toggle the dark-mode class on the body

    // Get the dark mode toggle button and update its text based on the current mode
    var button = document.getElementById("darkModeToggle");
    if (body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode"; // Switch button text to 'Light Mode'
    } else {
        button.textContent = "Dark Mode"; // Switch button text back to 'Dark Mode'
    }
}

// Optional: Save the user's dark mode preference in local storage
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
