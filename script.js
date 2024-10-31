(function() {
    const showHackedMessage = true; // Set this variable to true or false
    const customMessage = `Hey there! 
Our website is currently undergoing maintenance. 
We\'ll be back shortly. 
Thank you for your patience!`; // The message to display
    const buttonText = 'Call Us'; // Text for the button
    const phoneNumber = 'tel:+1234567890'; // Phone number to call (use the format tel:+countrycodephonenumber)

    if (showHackedMessage) {
        // Create a fullscreen div
        const hackedDiv = document.createElement('div');
        hackedDiv.style.position = 'fixed';
        hackedDiv.style.top = '0';
        hackedDiv.style.left = '0';
        hackedDiv.style.width = '100%';
        hackedDiv.style.height = '100%';
        hackedDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // White background
        hackedDiv.style.color = 'black';
        hackedDiv.style.fontSize = '48px';
        hackedDiv.style.display = 'flex';
        hackedDiv.style.flexDirection = 'column'; // Stack items vertically
        hackedDiv.style.alignItems = 'center';
        hackedDiv.style.justifyContent = 'center';
        hackedDiv.style.zIndex = '9999'; // Ensure it's on top of other elements
        hackedDiv.style.overflow = 'hidden'; // Prevent scrollbar
        hackedDiv.style.textAlign = 'center'; // Center the text

        // Add custom text to the div
        const messageElement = document.createElement('div');
        messageElement.textContent = customMessage;
        messageElement.style.marginBottom = '20px'; // Space between message and button
        messageElement.style.whiteSpace = 'pre-line'; // Preserve line breaks
        messageElement.style.fontSize = '24px'; // Adjust font size for multi-line readability

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

        // Append the elements to the hackedDiv
        hackedDiv.appendChild(messageElement);
        hackedDiv.appendChild(callButton);

        // Append the div to the body
        document.body.appendChild(hackedDiv);
    }
})();
