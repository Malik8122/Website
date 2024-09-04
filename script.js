// Function to handle sending messages
function sendMessage() {
    // Get user input
    const input = document.getElementById('chat-input').value.trim();
    if (input === '') return; // Ignore empty messages

    // Display user message
    const messagesContainer = document.getElementById('chatbot-messages');
    messagesContainer.innerHTML += `<div class="message user-message">${input}</div>`;

    // Clear input field
    document.getElementById('chat-input').value = '';

    // Generate a response
    const response = generateResponse(input);
    setTimeout(() => {
        messagesContainer.innerHTML += `<div class="message bot-message">${response}</div>`;
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to latest message
    }, 500);
}

// Function to generate a response based on user input
function generateResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerInput.includes('ticket')) {
        return 'You can purchase tickets from our Buy Tickets page.';
    } else {
        return 'I am not sure how to respond to that. Can you please provide more details?';
    }
}
