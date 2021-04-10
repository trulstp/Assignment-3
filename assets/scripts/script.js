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

    content.innerHTML = `
    <div class="verse-2__grid-container">

          <div class="verse-2__line-1">
            <span class="verse-2__line-1--1">In</span> <span class="verse-2__line-1--2">summertime</span> <span
              class="verse-2__line-1--1">a tree is</span>
          </div>

          <div class="verse-2__line-2">
            <span class="verse-2__line-2--1">green</span>
          </div>
          
    </div>

    <div class="verse-2__grid-container--2">

          <div class="verse-2__line-3">
            <span class="verse-2__line-3--1">In</span> <span class="verse-2__line-3--2">autumn</span>
          </div>

          <div class="verse-2__line-4">
            <span class="verse-2__line-4--1">gold</span> <span class="verse-2__line-3--1">and</span> <span
              class="verse-2__line-4--2">red</span>
          </div>

          <div class="verse-2__leaf-1">
            <img class="verse-2__leaf-1--size" src="assets/svgs/leaf-1.svg" alt="A leaf with red colour">
          </div>

          <div class="verse-2__leaf-2">
            <img class="verse-2__leaf-2--size" src="assets/svgs/leaf-2.svg" alt="A leaf with gold colour">
          </div>

    </div>

    <div class="verse-2__grid-container--3">

          <div class="verse-2__line-5">
            <span class="verse-2__line-5--1">In</span> <span class="verse-2__line-5--2">winter</span> <span
              class="verse-2__line-5--1">they are</span>
          </div>

          <div class="verse-2__line-6">
            <span class="verse-2__line-6--1">frosted white</span>
          </div>

          <div class="verse-2__line-7">
            <span class="verse-2__line-5--1">when all their leaves are shed...</span>
          </div>

    </div>`;
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

    content.innerHTML = `<div class="verse-3__grid-container">
        <div class="verse-3__grid-item-one">
            <span class="grid-item-one_content">I know the sky is blue</span>
        </div>
        <div class="verse-3__grid-item-one_text">
            <span class="grid-item-one_text-content">she said</span>
        </div>
        <div class="verse-3__grid-item-two">
            <span class="grid-item-two_content">And <span class="grid-item-two_content-text">silver</span> is the
                sand</span>
        </div>
        <div class="verse-3__grid-item-three">
            <span class="grid-item-three_content">And apples are the </span>
        </div>
        <div class="verse-3__grid-item_three_text">
            <span class="grid-item-three_text-content">brightest red</span>
            <div class="line"></div>
        </div>
        <div class="verse-3__grid-item-img_1">
            <svg viewBox="0 0 640 480">
                <path
                    d="m188.18 472.06c-3.0554-3.8843-4.5034-12.341-3.2624-19.054 1.2349-6.6804 1.6552-7.5279 14.457-29.15 18.922-31.96 25.662-49.127 38.81-98.857 0.57642-2.1802-2.2191-4.9047-5.0326-4.9047-3.6571 0-6.4562 2.7295-8.2082 8.004-1.9762 5.9497-3.2713 7.1661-8.3559 7.8481-4.8514 0.65076-10.63-1.666-12.937-5.1861-1.6311-2.4895-1.6259-3.1291 0.094955-11.606 1.7194-8.4697 1.7258-9.2213 0.11458-13.44-4.7881-12.537-16.608-14.029-23.389-2.9519-4.5609 7.4507-14.497 20.244-20.251 26.073-10.187 10.32-16.845 10.65-23.71 1.1728-2.2706-3.1345-3.0105-5.2645-3.0105-8.6664 0-3.9197 0.49609-4.9664 3.7881-7.9917 4.8499-4.4571 11.692-8.2602 22.476-12.493 14.683-5.7633 21.149-10.883 24.81-19.643 2.7221-6.5149 1.4562-14.514-2.6442-16.709-6.024-3.224-13.115 2.1849-25.189 19.214-11.201 15.798-17.262 19.675-29.773 19.043-8.6489-0.43677-12.751-2.7531-17.477-9.8678-4.3096-6.4882-5.5548-11.254-5.1222-19.603 0.31866-6.1513 0.85953-7.9405 3.5988-11.905 3.8333-5.5475 10.79-10.22 18.523-12.441 3.1567-0.90671 12.892-2.0175 22.223-2.5356 20.64-1.146 26.994-2.4002 49.678-9.806 11.468-3.7441 14.91-6.3161 14.91-11.142 0-2.9257-4.1704-7.0514-7.9085-7.8236-2.7458-0.5672-23.531-2.5962-26.612-2.5977-2.8054-0.001404-7.7826-4.9481-8.8431-8.789-1.5272-5.5311 0.71381-9.9948 5.6906-11.335 5.2984-1.4267 9.2191-0.18835 18.996 5.9998 4.4387 2.8095 11.164 6.0522 14.946 7.2059 6.6024 2.0145 7.0533 2.0297 11.366 0.38269 8.6764-3.3135 9.7218-9.1588 3.7298-20.855-4.9438-9.6503-14.039-19.369-21.787-23.28-11.696-5.9043-19.316-15.282-24.082-29.637-1.8974-5.715-2.342-9.202-2.3184-18.183 0.025864-9.8497 0.33273-11.768 2.7018-16.894 5.907-12.78 17.623-13.135 25.223-0.76448 2.4362 3.9654 3.1733 7.3448 5.9445 27.255 3.6296 26.077 5.018 30.371 13.056 40.377 8.3216 10.36 15.644 13.679 20.177 9.1458 2.9712-2.9711 3.3932-6.228 1.5906-12.272-0.8911-2.9875-1.8814-8.6137-2.2006-12.503-0.50217-6.1166-0.15752-8.3806 2.553-16.772 5.0803-15.728 4.0841-22.528-5.5695-38.016-5.6149-9.0088-6.1592-12.933-2.3582-17.001 4.7312-5.064 11.525-7.0654 13.972-4.1163 0.7771 0.93638 1.0605 7.5829 0.89363 20.961-0.27005 21.643-0.63326 20.007 7.8216 35.247 2.9076 5.2412 5.5035 16.4 5.529 23.766 0.009979 2.9065 0.6814 6.0264 1.5697 7.2946 2.8096 4.0113 12.398 5.1514 16.445 1.9554 0.73138-0.57761 3.3218-4.1296 5.7565-7.8933 2.5325-3.9148 6.1727-7.9984 8.507-9.5432 3.4971-2.3142 4.8668-2.6349 9.585-2.2436 4.5862 0.38032 6.1902 1.0757 9.6117 4.1667 3.228 2.9163 4.9367 3.7102 7.9855 3.7102 8.0776 0 17.329-7.6741 17.329-14.375 0-1.6304-1.3689-6.0832-3.042-9.8952-4.4921-10.235-4.7461-14.142-1.5424-23.727 5.5246-16.528 10.473-21.121 22.767-21.127 10.224-0.005173 17.243 4.8751 19.024 13.227 1.1918 5.5881 0.32553 9.7375-4.6049 22.057-10.721 26.789-11.385 35.092-3.4382 43.039 2.0438 2.0438 5.6217 4.2869 7.951 4.9848 6.8422 2.05 11.716-0.42339 21.014-10.665 9.2918-10.235 14.076-12.691 19.942-10.24 3.0956 1.2934 3.8595 2.2953 5.2054 6.8275 0.86755 2.9214 1.5774 6.4264 1.5774 7.789 0 10.742-9.8736 21.391-22.728 24.514-2.7779 0.67485-7.2264 2.3118-9.8854 3.6376-15.251 7.6042-8.7855 23.46 9.595 23.531 8.147 0.031342 15.197-2.9646 24.029-10.211 16.076-13.19 35.88-27.304 43.777-31.197 12.68-6.2518 29.988-8.6481 42.164-5.8376 12.562 2.8997 17.426 15.565 10.954 28.525-3.3882 6.7842-4.3815 7.0849-16.413 4.9683-19.297-3.3948-36.134-1.8732-52.936 4.7837-14.105 5.5886-29.3 13.826-31.908 17.297-5.3728 7.1514-4.0748 14.697 3.387 19.688 9.0059 6.0236 11.238 8.6118 11.811 13.694 0.76092 6.7502-0.98721 10.018-7.9868 14.927-9.2348 6.4778-11.898 12.414-8.5006 18.945 2.1093 4.054 5.5138 6.8633 11.716 9.6674 8.1148 3.669 13.705 4.1912 22.919 2.1412 11.027-2.4534 18.682-1.6884 26.237 2.6219 12.352 7.0474 18.897 15.598 23.128 30.219 1.4677 5.0719 1.8922 9.7841 1.865 20.708-0.039642 15.967-1.2924 20.92-6.7028 26.502-12.259 12.648-31.041-4.7195-37.611-34.777-2.8341-12.968-6.042-20.003-11.558-25.348-7.2206-6.9961-25.114-14.188-32.058-12.885-4.4333 0.83173-11.066 7.4938-12.461 12.516-2.3507 8.4633-0.75928 13.711 7.5667 24.952 15.84 21.385 20.412 30.16 21.443 41.16 0.66138 7.0548-0.55963 9.776-5.6504 12.592-5.1627 2.8561-9.4361 3.5668-14.022 2.332-5.4236-1.4604-8.5002-5.017-8.9657-10.364-2.4385-28.012-4.1685-35.158-10.225-42.234-6.3207-7.3842-16.644-10.134-24.976-6.6532-6.4608 2.6996-7.5985 6.4924-6.1072 20.361 0.53696 4.9936 0.40008 7.8323-0.45468 9.4294-1.2855 2.402-6.6614 5.1445-10.084 5.1445-5.4929 0-13.709-12.643-18.21-28.022-2.7454-9.3809-5.4075-12.586-10.452-12.586-5.7237 0-8.4749 2.3739-10.392 8.9666-2.633 9.0575-1.5812 17.464 4.4019 35.177 5.834 17.272 6.5723 19.052 15.924 38.386 5.2587 10.872 6.9486 15.46 7.3081 19.844 0.61468 7.4952-1.1438 12.628-5.1672 15.081-6.0921 3.7148-9.7898 2.0739-14.622-6.4887-4.6952-8.3195-6.1031-14.82-7.1842-33.169-1.5364-26.077-6.8075-48.922-15.757-68.292-4.3642-9.4456-5.9964-11.322-9.8466-11.322-8.0308 0-14.174 8.2701-14.256 19.193-0.044373 5.914 0.3721 7.2981 4.1942 13.939 2.334 4.0551 4.9359 9.4122 5.7821 11.905 1.5545 4.5789 1.9143 15.974 0.65112 20.624-1.0584 3.8958-6.4355 6.0575-15.073 6.0594-9.2068 0.001923-12.541-1.5948-14.724-7.0512-2.6348-6.5848-2.0579-12.873 2.4002-26.16 4.7313-14.102 5.3964-23.808 2.125-31.011-2.0114-4.4286-6.3948-8.5069-9.1433-8.5069-5.9252 0-15.03 19.97-21.765 47.74-3.5905 14.804-4.8136 21.875-9.0404 52.266-2.8178 20.26-4.4245 25.967-9.14 32.465-6.6194 9.1213-21.937 13.361-26.645 7.3748z"
                    fill-rule="evenodd" stroke="#FADA5E" fill="#FADA5E" />
            </svg>
        </div>
        <div class="verse-3__grid-item-four">
            <span class="grid-item-four_content">What <span class="grid-item-four_content-text">colour</span> is a man?</span>
        </div>
        <div class="verse-3__grid-item-img_2">
            <svg viewBox="0 0 640 480">
                <path
                    d="m188.18 472.06c-3.0554-3.8843-4.5034-12.341-3.2624-19.054 1.2349-6.6804 1.6552-7.5279 14.457-29.15 18.922-31.96 25.662-49.127 38.81-98.857 0.57642-2.1802-2.2191-4.9047-5.0326-4.9047-3.6571 0-6.4562 2.7295-8.2082 8.004-1.9762 5.9497-3.2713 7.1661-8.3559 7.8481-4.8514 0.65076-10.63-1.666-12.937-5.1861-1.6311-2.4895-1.6259-3.1291 0.094955-11.606 1.7194-8.4697 1.7258-9.2213 0.11458-13.44-4.7881-12.537-16.608-14.029-23.389-2.9519-4.5609 7.4507-14.497 20.244-20.251 26.073-10.187 10.32-16.845 10.65-23.71 1.1728-2.2706-3.1345-3.0105-5.2645-3.0105-8.6664 0-3.9197 0.49609-4.9664 3.7881-7.9917 4.8499-4.4571 11.692-8.2602 22.476-12.493 14.683-5.7633 21.149-10.883 24.81-19.643 2.7221-6.5149 1.4562-14.514-2.6442-16.709-6.024-3.224-13.115 2.1849-25.189 19.214-11.201 15.798-17.262 19.675-29.773 19.043-8.6489-0.43677-12.751-2.7531-17.477-9.8678-4.3096-6.4882-5.5548-11.254-5.1222-19.603 0.31866-6.1513 0.85953-7.9405 3.5988-11.905 3.8333-5.5475 10.79-10.22 18.523-12.441 3.1567-0.90671 12.892-2.0175 22.223-2.5356 20.64-1.146 26.994-2.4002 49.678-9.806 11.468-3.7441 14.91-6.3161 14.91-11.142 0-2.9257-4.1704-7.0514-7.9085-7.8236-2.7458-0.5672-23.531-2.5962-26.612-2.5977-2.8054-0.001404-7.7826-4.9481-8.8431-8.789-1.5272-5.5311 0.71381-9.9948 5.6906-11.335 5.2984-1.4267 9.2191-0.18835 18.996 5.9998 4.4387 2.8095 11.164 6.0522 14.946 7.2059 6.6024 2.0145 7.0533 2.0297 11.366 0.38269 8.6764-3.3135 9.7218-9.1588 3.7298-20.855-4.9438-9.6503-14.039-19.369-21.787-23.28-11.696-5.9043-19.316-15.282-24.082-29.637-1.8974-5.715-2.342-9.202-2.3184-18.183 0.025864-9.8497 0.33273-11.768 2.7018-16.894 5.907-12.78 17.623-13.135 25.223-0.76448 2.4362 3.9654 3.1733 7.3448 5.9445 27.255 3.6296 26.077 5.018 30.371 13.056 40.377 8.3216 10.36 15.644 13.679 20.177 9.1458 2.9712-2.9711 3.3932-6.228 1.5906-12.272-0.8911-2.9875-1.8814-8.6137-2.2006-12.503-0.50217-6.1166-0.15752-8.3806 2.553-16.772 5.0803-15.728 4.0841-22.528-5.5695-38.016-5.6149-9.0088-6.1592-12.933-2.3582-17.001 4.7312-5.064 11.525-7.0654 13.972-4.1163 0.7771 0.93638 1.0605 7.5829 0.89363 20.961-0.27005 21.643-0.63326 20.007 7.8216 35.247 2.9076 5.2412 5.5035 16.4 5.529 23.766 0.009979 2.9065 0.6814 6.0264 1.5697 7.2946 2.8096 4.0113 12.398 5.1514 16.445 1.9554 0.73138-0.57761 3.3218-4.1296 5.7565-7.8933 2.5325-3.9148 6.1727-7.9984 8.507-9.5432 3.4971-2.3142 4.8668-2.6349 9.585-2.2436 4.5862 0.38032 6.1902 1.0757 9.6117 4.1667 3.228 2.9163 4.9367 3.7102 7.9855 3.7102 8.0776 0 17.329-7.6741 17.329-14.375 0-1.6304-1.3689-6.0832-3.042-9.8952-4.4921-10.235-4.7461-14.142-1.5424-23.727 5.5246-16.528 10.473-21.121 22.767-21.127 10.224-0.005173 17.243 4.8751 19.024 13.227 1.1918 5.5881 0.32553 9.7375-4.6049 22.057-10.721 26.789-11.385 35.092-3.4382 43.039 2.0438 2.0438 5.6217 4.2869 7.951 4.9848 6.8422 2.05 11.716-0.42339 21.014-10.665 9.2918-10.235 14.076-12.691 19.942-10.24 3.0956 1.2934 3.8595 2.2953 5.2054 6.8275 0.86755 2.9214 1.5774 6.4264 1.5774 7.789 0 10.742-9.8736 21.391-22.728 24.514-2.7779 0.67485-7.2264 2.3118-9.8854 3.6376-15.251 7.6042-8.7855 23.46 9.595 23.531 8.147 0.031342 15.197-2.9646 24.029-10.211 16.076-13.19 35.88-27.304 43.777-31.197 12.68-6.2518 29.988-8.6481 42.164-5.8376 12.562 2.8997 17.426 15.565 10.954 28.525-3.3882 6.7842-4.3815 7.0849-16.413 4.9683-19.297-3.3948-36.134-1.8732-52.936 4.7837-14.105 5.5886-29.3 13.826-31.908 17.297-5.3728 7.1514-4.0748 14.697 3.387 19.688 9.0059 6.0236 11.238 8.6118 11.811 13.694 0.76092 6.7502-0.98721 10.018-7.9868 14.927-9.2348 6.4778-11.898 12.414-8.5006 18.945 2.1093 4.054 5.5138 6.8633 11.716 9.6674 8.1148 3.669 13.705 4.1912 22.919 2.1412 11.027-2.4534 18.682-1.6884 26.237 2.6219 12.352 7.0474 18.897 15.598 23.128 30.219 1.4677 5.0719 1.8922 9.7841 1.865 20.708-0.039642 15.967-1.2924 20.92-6.7028 26.502-12.259 12.648-31.041-4.7195-37.611-34.777-2.8341-12.968-6.042-20.003-11.558-25.348-7.2206-6.9961-25.114-14.188-32.058-12.885-4.4333 0.83173-11.066 7.4938-12.461 12.516-2.3507 8.4633-0.75928 13.711 7.5667 24.952 15.84 21.385 20.412 30.16 21.443 41.16 0.66138 7.0548-0.55963 9.776-5.6504 12.592-5.1627 2.8561-9.4361 3.5668-14.022 2.332-5.4236-1.4604-8.5002-5.017-8.9657-10.364-2.4385-28.012-4.1685-35.158-10.225-42.234-6.3207-7.3842-16.644-10.134-24.976-6.6532-6.4608 2.6996-7.5985 6.4924-6.1072 20.361 0.53696 4.9936 0.40008 7.8323-0.45468 9.4294-1.2855 2.402-6.6614 5.1445-10.084 5.1445-5.4929 0-13.709-12.643-18.21-28.022-2.7454-9.3809-5.4075-12.586-10.452-12.586-5.7237 0-8.4749 2.3739-10.392 8.9666-2.633 9.0575-1.5812 17.464 4.4019 35.177 5.834 17.272 6.5723 19.052 15.924 38.386 5.2587 10.872 6.9486 15.46 7.3081 19.844 0.61468 7.4952-1.1438 12.628-5.1672 15.081-6.0921 3.7148-9.7898 2.0739-14.622-6.4887-4.6952-8.3195-6.1031-14.82-7.1842-33.169-1.5364-26.077-6.8075-48.922-15.757-68.292-4.3642-9.4456-5.9964-11.322-9.8466-11.322-8.0308 0-14.174 8.2701-14.256 19.193-0.044373 5.914 0.3721 7.2981 4.1942 13.939 2.334 4.0551 4.9359 9.4122 5.7821 11.905 1.5545 4.5789 1.9143 15.974 0.65112 20.624-1.0584 3.8958-6.4355 6.0575-15.073 6.0594-9.2068 0.001923-12.541-1.5948-14.724-7.0512-2.6348-6.5848-2.0579-12.873 2.4002-26.16 4.7313-14.102 5.3964-23.808 2.125-31.011-2.0114-4.4286-6.3948-8.5069-9.1433-8.5069-5.9252 0-15.03 19.97-21.765 47.74-3.5905 14.804-4.8136 21.875-9.0404 52.266-2.8178 20.26-4.4245 25.967-9.14 32.465-6.6194 9.1213-21.937 13.361-26.645 7.3748z"
                    fill-rule="evenodd" stroke="#A0522D" fill="#A0522D" />
            </svg>
        </div>
        <div class="verse-3__grid-item_button">
            <button onclick="verse4()">Continue</button>
        </div>
    </div>`;
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

    content.innerHTML = `
    <svg width="75vw" height="95vh" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">

        <!--Head-->
        <circle class="head" cx="250" cy="66" r="50" fill="#e6e6e6"/>
        <!--Text head-->
        <path id="headPath" d="M200,66a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"/>
        <text id="verse4_sentence1">
            <textPath href="#headPath">Man is many colours child: </textPath>
        </text>
    
        <!--Left arm-->
        <rect x="150" y="122" width="35" height="190" rx="17.5" fill="#e6e6e6"/>
        <!--Shoulder-->
        <rect x="163" y="122" width="22" height="23" rx="5" fill="#e6e6e6"/>
    
        <!--Right arm-->
        <rect x="315" y="122" width="35" height="190" rx="17.5" fill="#e6e6e6"/>
        <!--Shoulder-->
        <rect x="315" y="122" width="22" height="23" rx="5" fill="#e6e6e6"/>
        
        <!--Arm text-->
        <text id="verse4_sentence2" transform="translate(175,306) rotate(-90)" opacity="0">Some are yellow,
            <tspan id="verse4_sentence2-right" x="0" y="165"> some are brown.</tspan>
        </text>

        <!--Body-->
        <rect x="190" y="122" width="120" height="190" rx="5" fill="#e6e6e6"/>
        <text id="verse4_sentence3" x="212" y="178" opacity="0">And 
            <tspan id="verse4_sentence3-line2" x="206" y="220">some </tspan>
            <tspan id="verse4_sentence3-line3" x="211" y="247">are black </tspan>
            <tspan id="verse4_sentence3-line4" x="238" y="273">as </tspan>
            <tspan id="verse4_sentence3-line5" x="198" y="295">sightlessness, </tspan>
        </text>

        <!--Left leg-->
        <rect x="195" y="316" width="50" height="150" rx="5" fill="#e6e6e6"/>
    
        <!--Right leg-->
        <rect x="255" y="316" width="50" height="150" rx="5" fill="#e6e6e6"/>

        <!--Leg text-->
        <text id="verse4_sentence4" transform="translate(228,460) rotate(-90)" opacity="0">Some white
            <tspan id="verse4_sentence4-right" x="0" y="58"> as eiderdown.</tspan>
        </text>
    </svg>
    `;

    //set the initial colors
    setColor("verse4_sentence1");
    setColor("verse4_sentence2");
    setColor("verse4_sentence3");
    setColor("verse4_sentence4");

    setInterval(function(){
        setColor("verse4_sentence1");
        setColor("verse4_sentence2");
        setColor("verse4_sentence3");
        setColor("verse4_sentence4");
    },1500); //1500ms = 1.5s

    function setColor(evt){
        document.getElementById(evt).style.fill = "RGB(" + Math.floor(Math.random()*191) + "," + Math.floor(Math.random()*191) + "," + Math.floor(Math.random()*191) + ")";
    }
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

    content.innerHTML = `<div class="div1-verse5">
        
    <span class="verse-5-first">She took her crayons from a box</span>
    <span class="verse-5-second">And placed them in my glove</span>
    <span class="verse-5-third">And said, "By mixing all of these"</span>
    <span class="verse-5-fourth">Comes my favourite <p class="rainbow-verse5"> color</p> </span>
    <span class="fade-in-love">

    <svg class="love-verse5" width="100" height="100" fill-opacity="1" fill="none" style="padding-left: 10px;">
        
        <text class="text-verse5" x="15" y="50" fill="red" font-size="50" font-family="Arial, Helvetica, sans-serif">V
            <animate attributeName="x" begin="13s" from="20" to="75" dur="2s" repeatCount="1" fill="freeze"></animate>
        </text>

        <text class="text-verse5" x="40" y="50" fill="red" font-size="50" font-family="Arial, Helvetica, sans-serif">L
            <animate attributeName="x" begin="13s" from="40" to="15" dur="2s" repeatCount="1" fill="freeze"></animate>
        </text>

        <text class="text-verse5" x="75" y="50" fill="red" font-size="50" font-family="Arial, Helvetica, sans-serif">E
            <animate attributeName="x" begin="13s" from="75" to="105" dur="2s" repeatCount="1" fill="freeze"></animate>
        </text>

        <text class="text-verse5" x="105" y="50" fill="red" font-size="50" font-family="Arial, Helvetica, sans-serif">O
            <animate attributeName="x" begin="13s" from="105" to="40" dur="2s" repeatCount="1" fill="freeze"></animate>
        </text>        

</svg>
</span>
   
</div>`;
}