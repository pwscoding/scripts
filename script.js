(function() {
    const showHackedMessage = true; // Set this variable to true or false
    const customMessage = [
        "Hey, Shadab",
        "you are not allowed to access this website",
    ]; // Array of message lines
    const buttonText = 'Call Us'; // Text for the button
    const phoneNumber = 'tel:+1234567890'; // Phone number to call (use the format tel:+countrycodephonenumber)

    // Check if the hacked message should be shown
    if (showHackedMessage) {
        // Check if a div with the ID 'testing-div' exists
        if (!document.getElementById('testing-div')) {
            // Create a fullscreen div
            const hackedDiv = document.createElement('div');
            hackedDiv.id = 'testing-div';
            hackedDiv.style.position = 'fixed';
            hackedDiv.style.top = '0';
            hackedDiv.style.left = '0';
            hackedDiv.style.width = '100%';
            hackedDiv.style.height = '100%';
            hackedDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // White background
            hackedDiv.style.color = 'black';
            hackedDiv.style.display = 'flex';
            hackedDiv.style.flexDirection = 'column'; // Stack items vertically
            hackedDiv.style.alignItems = 'center';
            hackedDiv.style.justifyContent = 'center';
            hackedDiv.style.zIndex = '9999'; // Ensure it's on top of other elements
            hackedDiv.style.overflow = 'hidden'; // Prevent scrollbar
            hackedDiv.style.textAlign = 'center'; // Center the text

            // Add each line of the message to a new div element
            customMessage.forEach(line => {
                const messageLine = document.createElement('div');
                messageLine.textContent = line;
                messageLine.style.fontSize = '24px';
                messageLine.style.marginBottom = '10px'; // Space between lines
                hackedDiv.appendChild(messageLine);
            });

            // Create an anchor tag to redirect to a phone call
            const callButton = document.createElement('a');
            callButton.textContent = buttonText;
            callButton.href = phoneNumber; // Set the href to the phone number
            callButton.style.padding = '15px 30px'; // Padding for the button
            callButton.style.fontSize = '24px'; // Font size for the button
            callButton.style.color = 'white'; // Text color
            callButton.style.backgroundColor = 'red'; // Button color
            callButton.style.border = 'none'; // Remove border
            callButton.style.borderRadius = '5px'; // Rounded corners
            callButton.style.cursor = 'pointer'; // Pointer cursor on hover
            callButton.style.textDecoration = 'none'; // Remove underline from the link

            // Append the button to the hackedDiv
            hackedDiv.appendChild(callButton);

            // Append the div to the body
            document.body.appendChild(hackedDiv);
        }
    }
})();
