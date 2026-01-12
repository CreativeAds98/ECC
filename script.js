const inputField = document.getElementById("search-input");
const textToType = "Search for anything here...";
let index = 0;
let isAnimating = false;
let animationTimeout;

function typeWriter() {
    // Stop if the user has typed something in the input
    if (inputField.value.length > 0) return;

    // Append the next character
    if (index < textToType.length) {
        inputField.setAttribute("placeholder", inputField.getAttribute("placeholder") + textToType.charAt(index));
        index++;
        animationTimeout = setTimeout(typeWriter, 100); // Speed of typing (100ms)
    } else {
        // Optional: Pause at the end, then clear and restart loop
        animationTimeout = setTimeout(() => {
            if (inputField.value.length === 0) { // Check again before restarting
                inputField.setAttribute("placeholder", "");
                index = 0;
                typeWriter();
            }
        }, 2000); // Wait 2 seconds before looping
    }
}

function startAnimation() {
    if (!isAnimating && inputField.value.length === 0) {
        isAnimating = true;
        inputField.setAttribute("placeholder", "");
        index = 0;
        typeWriter();
    }
}

function stopAnimation() {
    clearTimeout(animationTimeout);
    isAnimating = false;
    // We don't clear the placeholder here so the user sees what was last there
    // until the browser naturally hides it when text is entered.
}

// Event Listeners
// 1. When user inputs text, stop animation
inputField.addEventListener("input", () => {
    stopAnimation();
});

// 2. If user clears the text (backspaces everything), restart animation
inputField.addEventListener("keyup", () => {
    if (inputField.value.length === 0) {
        startAnimation();
    }
});

// Start initially
startAnimation();







    // 1. The Toggle Function (Opens/Closes menu on button click)
    function toggleMenu() {
        var menu = document.getElementById('mobile-nav');
        var icon = document.getElementById('menu-icon');

        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // 2. The Auto-Close Function (Closes menu when a Link is clicked)
    document.addEventListener('DOMContentLoaded', function() {
        // Select all links inside the mobile menu
        var links = document.querySelectorAll('#mobile-nav a');
        var menu = document.getElementById('mobile-nav');
        var icon = document.getElementById('menu-icon');

        // Add a click event to every link
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                // Remove the active class (Close the menu)
                menu.classList.remove('active');
                
                // Reset the icon back to 'Bars'
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const track = document.querySelector(".slider-track");
        
        // This duplicates all the items inside the track.
        // Original: [A, B, C] -> New: [A, B, C, A, B, C]
        // This allows the animation to scroll halfway and snap back instantly.
        track.innerHTML += track.innerHTML;
    });








