(function() {
    const showHackedMessage = false; // Set this variable to true or false

    if (showHackedMessage) {
        // Create a fullscreen div
        const hackedDiv = document.createElement('div');
        hackedDiv.style.position = 'fixed';
        hackedDiv.style.top = '0';
        hackedDiv.style.left = '0';
        hackedDiv.style.width = '100%';
        hackedDiv.style.height = '100%';
        hackedDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // semi-transparent black
        hackedDiv.style.color = 'white';
        hackedDiv.style.fontSize = '48px';
        hackedDiv.style.display = 'flex';
        hackedDiv.style.alignItems = 'center';
        hackedDiv.style.justifyContent = 'center';
        hackedDiv.style.zIndex = '9999'; // Ensure it's on top of other elements
        hackedDiv.style.overflow = 'hidden'; // Prevent scrollbar

        // Add text to the div
        hackedDiv.textContent = 'Hacked';

        // Append the div to the body
        document.body.appendChild(hackedDiv);

        // Optionally, you can remove the div after some time
        // setTimeout(() => {
        //     document.body.removeChild(hackedDiv);
        // }, 5000); // Remove after 5 seconds (uncomment if needed)
    }
})();
