// Fixing the screen height for mobile phones properly
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Function for showing/hiding the menu on mobile
function toggleMenu(x) {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    // If the screen is mobile, toggle the menu
    if (mediaQuery.matches) {
    let navigation = document.querySelector("nav");
    let hiddenItem = document.querySelector(".menu__menuItem--hidden");

    // Toggles between hamburger menu icon and close icon
    //x.classList.toggle("change");

    // Hides or displays the menu based on its state
    if (navigation.style.display === "block") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "block";
    }

    // Shows the hidden list item
    if (hiddenItem.style.display === "list-item") {
        hiddenItem.style.display = "none";
    } else {
        hiddenItem.style.display = "list-item";
    }
   }
  }


// ***************** FUNCTIONS FOR CHANGING CONTENT *****************

function home() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundImage = "url('../images/mitchell-background.jpg')";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Changes the current active item to not active

    list[0].classList.add("menu__menuItem--active"); // Changes the clicked menu item to active

    content.innerHTML = `<a class="start-button" href="#" onclick="verse1()">Start animation<i class="play-icon fa fa-play fa-lg"></i></a>`; // Changes the inner content of the div
}

function verse1() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed 
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundColor = "lightgrey";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[1].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `Verse 1`;
}

function verse2() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed 
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundColor = "lightgrey";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[2].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `Verse 2`;
}

function verse3() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed 
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundColor = "lightgrey";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[3].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `Verse 3`;
}

function verse4() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed 
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundColor = "lightgrey";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[4].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `Verse 4`;
}

function verse5() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed 
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundColor = "lightgrey";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[5].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `Verse 5`;
}

function verse5() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed 
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundColor = "lightgrey";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[5].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `Verse 5`;
}

function author() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    /* Must be fixed 
    let background = document.querySelector("body"); // Reference to the website background

    background.style.backgroundColor = "lightgrey";  // The background of the home page
    */

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[6].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `About the author`;
}