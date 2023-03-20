const toggleButton = document.getElementById("hamburgerMenu");
const sidebarMenu = document.getElementById("sidebarMenu");
const body = document.getElementById("body");

// Check if the menu state is stored in localStorage
if (localStorage.getItem("menuState") !== null) {
  // Retrieve the state from localStorage and display the menu accordingly
  const menuState = localStorage.getItem("menuState");
  sidebarMenu.style.display = menuState;
} else {
  // Set the initial state to closed if it's not stored in localStorage
  localStorage.setItem("menuState", "none");
}

toggleButton.addEventListener("click", function() {
  if (sidebarMenu.style.display === "none" || sidebarMenu.style.display === "") {
    // Set the state to open and update the menu display
    localStorage.setItem("menuState", "block");
    sidebarMenu.style.display = "block";
  } else {
    // Set the state to closed and update the menu display
    localStorage.setItem("menuState", "none");
    sidebarMenu.style.display = "none";
  }
});
