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

const img = new Image(); // Container for an image
img.src = 'assets/images/gray-background.jpg'; // Saves the grey background into the container

// ***************** FUNCTIONS FOR CHANGING CONTENT *****************

function home() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    let background = document.querySelector("html"); // Reference to the website background

    const mediaQuery = window.matchMedia('(max-width: 600px)');

    // If the screen is mobile, display the mobile background, else the desktop
    if (mediaQuery.matches) {

        background.style.backgroundImage = "url('assets/images/mitchell-background-mobile.jpg')";  // Mobile background

    } else {

        background.style.backgroundImage = "url('assets/images/mitchell-background.jpg')";  // Desktop background

    }

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Changes the current active item to not active

    list[0].classList.add("menu__menuItem--active"); // Changes the clicked menu item to active

    content.innerHTML = `<a class="start-button" href="#" onclick="playVerse1()">Start animation<i class="play-icon fa fa-play fa-lg"></i></a>`; // Changes the inner content of the div
}

function verse1() {
    // Toggles the menu
    toggleMenu();

    // Displays and plays verse 1
    playVerse1();
}

function playVerse1() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    let background = document.querySelector("html"); // Reference to the website background

    if (background.style.backgroundImage != "url('assets/images/gray-background.jpg')") { // If the background is not gray already, make it gray

        background.style.backgroundImage = "url('assets/images/gray-background.jpg')";  // The background of the home page

    }

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[1].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `<div class="verse1_layout_box">
    <p class="verse1_line1">
        I met a child a year ago
    </p>
    <p class="verse1_line2">
        Whose eyes would never see.
    </p>
    <div class="verse1_smiley1">
        <figure>
        <img src="./assets/images/smiley.png">
        </figure>
    </div>
    <div class="verse1_smiley2">
        <figure>
        <img src="./assets/images/smiley.png">
        </figure>
    </div>
    <svg class="verse1_svg" viewbox="0 0 490 150">
        <path id="curve" fill="transparent"
        d="M125.4,50.3c69.1,66.7,180.9,66.7,240,0"/>
        <text width="500">
            <textPath xlink:href="#curve">
                She asked me with a timid smile,
            </textPath>
        </text>
    </svg>
    <p class="verse1_line4">
        "What <span class="verse1_span_colour">colour</span> is a tree?"
    </p>
</div>`;
}

function verse2() {
    let content = document.getElementsByClassName("flex-container")[0]; // Reference to div for displaying content
    
    let active = document.getElementsByClassName("menu__menuItem--active"); // Reference to the active menu element

    let list = document.querySelectorAll(".menu > li"); // Reference to all menu items

    let background = document.querySelector("html"); // Reference to the website background

    if (background.style.backgroundImage != "url('assets/images/gray-background.jpg')") { // If the background is not gray already, make it gray

        background.style.backgroundImage = "url('assets/images/gray-background.jpg')";  // The background of the home page

    }

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

    let background = document.querySelector("html"); // Reference to the website background

    if (background.style.backgroundImage != "url('assets/images/gray-background.jpg')") { // If the background is not gray already, make it gray

        background.style.backgroundImage = "url('assets/images/gray-background.jpg')";  // The background of the home page

    }
    
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

    let background = document.querySelector("html"); // Reference to the website background

    if (background.style.backgroundImage != "url('assets/images/gray-background.jpg')") { // If the background is not gray already, make it gray

        background.style.backgroundImage = "url('assets/images/gray-background.jpg')";  // The background of the home page

    }

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

    let background = document.querySelector("html"); // Reference to the website background

    if (background.style.backgroundImage != "url('assets/images/gray-background.jpg')") { // If the background is not gray already, make it gray

        background.style.backgroundImage = "url('assets/images/gray-background.jpg')";  // The background of the home page

    }

    // Toggles the menu
    toggleMenu();

    active[0].classList.remove("menu__menuItem--active"); // Removes the current active class item

    list[5].classList.add("menu__menuItem--active"); // Adds the active class to the clicked menu item

    content.innerHTML = `Verse 5`;
}