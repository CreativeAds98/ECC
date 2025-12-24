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












